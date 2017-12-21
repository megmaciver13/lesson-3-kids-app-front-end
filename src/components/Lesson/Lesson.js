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
      .get(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
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
      .delete(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      .then(response => {
        this.props.history.push('/subjects')
      })
      .catch(err => console.log(err))
  }

  render () {
    let questions = this.state.lesson.questions.map((question, index) => {
      return <QuestionBox info={question} key={index} />
    })
    return (
      <div className="lesson-page">
        <h1>Lesson: {this.state.lesson.name}</h1>
        <div className="questions">
          {questions}
        </div>
        {this.state.updateClicked ? (
          <UpdateLesson
            lesson={this.state.lesson}
            subject={this.state.subject}
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
