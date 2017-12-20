import React, { Component } from 'react'
import axios from 'axios'

import QuestionBox from '../QuestionBox/QuestionBox'
import './Lesson.css'

class Lesson extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      lesson: {}
    }
  }

  componentDidMount () {
    axios
      .get(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      .then(lesson => {
        this.setState({
          lesson: lesson.data,
          questions: lesson.data.questions
        })
      })
      .catch(err => console.log(err))
  }

  render () {
      let questions = this.state.questions.map((question, index) => {
        return <QuestionBox info={question} key={index} />
      })
      return (
        <div className="lesson-page">
        <h1>Lesson: {this.state.lesson.name}</h1>
          <div className="questions">
            {questions}
          </div>
        </div>
      )
    }
}

export default Lesson
