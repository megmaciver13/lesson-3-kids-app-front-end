import React, { Component } from 'react'
import axios from 'axios'
import {
  Link
} from 'react-router-dom'

import './Lessons.css'
import LessonBox from '../LessonBox/LessonBox'

class Lessons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lessons: [],
      subject: {}
    }
  }

  componentDidMount () {
    axios.get(`https://kids-app-back-end.herokuapp.com/${this.props.match.params.subject_id}`)
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
        <h3>Choose a lesson below to get started!</h3>
        <div className="lessons">
          {showLessons}
        </div>
        <button>
          <Link to={`/subjects/${this.state.subject._id}/lesson`}>Create a New Lesson!</Link>
        </button>
      </div>
    )
  }
}

export default Lessons
