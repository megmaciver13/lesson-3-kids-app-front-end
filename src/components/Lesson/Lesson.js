import React, { Component } from 'react'
import axios from 'axios'
import {
  Link,
  Route
} from 'react-router-dom'

import QuestionBox from '../QuestionBox/QuestionBox'
import './Lesson.css'
import UpdateLesson from '../UpdateLesson/UpdateLesson'

class Lesson extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lesson: {
        name: '',
        lessonImage: '',
        questions: []
      },
      updateClicked: false
    }
  }

  componentDidMount () {
    axios
      .get(`https://kids-app-back-end.herokuapp.com/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      .then(lesson => {
        this.setState({
          lesson: lesson.data
        })
      })
      .catch(err => console.log(err))
  }

  onUpdate (e) {
    e.preventDefault()
    this.setState({
      updateClicked: true
    })
  }

  handleName (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleLessonImage (e) {
    this.setState({
      lessonImage: e.target.value
    })
  }

  onDelete (e) {
    axios
      .delete(`https://kids-app-back-end.herokuapp.com/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      .then(response => {
        this.props.history.push('/subjects')
      })
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state.lesson)
      let questions = this.state.lesson.questions.map((question, index) => {
        return <QuestionBox info={question} key={index} />
      })
      return (
        <div className="lesson-page">
          <h1 className="lesson-name">Lesson: {this.state.lesson.name}</h1>
            <div className="questions">
              {questions}
            </div>
          {this.state.updateClicked ? (
            <UpdateLesson
              lesson = {this.state.lesson}
            />
          ) : (
            <p />
          )}
        <br />
        <button>
          <Link to={`/subjects/${this.props.match.params.subject_id}/lesson/${this.state.lesson._id}/question`}>Create a New Question</Link>
        </button>
        <br />
        <button onClick={e => this.onUpdate(e)}> Edit This Lesson </button>
        <button onClick={e => this.onDelete(e)}> Delete This Lesson </button>
      </div>
    )
  }
}

export default Lesson
