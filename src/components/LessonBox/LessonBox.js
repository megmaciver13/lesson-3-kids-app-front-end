import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LessonBox.css'

class LessonBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lesson: this.props.info,
      subject: this.props.subject
    } // You didn't need to redefine state here, probably best to just be presentational component.
  }

  render () {
    return (
      <div className="lesson-box-container">
        <img className='lesson-icon' src={this.state.lesson.lessonImage} alt={this.state.lesson.name}/>
        <Link className='lesson-icon' to={`/subjects/${this.state.subject._id}/lesson/${this.state.lesson._id}`}>{this.state.lesson.name}</Link>
      </div>
    ) // Might make sense for the img to also be inside the `Link` tag
  }
}

export default LessonBox
