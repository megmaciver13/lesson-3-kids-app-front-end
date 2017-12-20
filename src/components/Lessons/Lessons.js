import React, { Component } from 'react'
import axios from 'axios'

import './Lessons.css'
import LessonBox from '../LessonBox/LessonBox'
import CreateLessonButton from '../CreateLessonButton/CreateLessonButton'

class Lessons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lessons: [],
      subject: {}
    }
  }

  componentDidMount () {
    axios.get(`http://localhost:3001/subjects/${this.props.match.params.subject_id}`)
      .then(subject => {
        this.setState({
          subject: subject.data,
          lessons: subject.data.lessons
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let showLessons = this.state.lessons.map((lesson, index) => {
      return (
        <LessonBox info={lesson} subject={this.state.subject} key={index} />
      )
    })
    return (
      <div className="lessons-page">
        <h1>{this.state.subject.name}</h1>
        <h2>Choose a lesson below to get started!</h2>
        <div className="lessons">
          {showLessons}
        </div>
        <CreateLessonButton />
      </div>
    )
  }
}

export default Lessons
