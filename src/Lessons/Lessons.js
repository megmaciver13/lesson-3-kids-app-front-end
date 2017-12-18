import React, { Component } from 'react'
import axios from 'axios'

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
        <div className='lesson-of-subject'>
          <LessonBox info={lesson} key={index} />
        </div>
      )
    })
    return (
      <div className='lessons'>
        {showLessons}
      </div>
    )
  }
}

export default Lessons
