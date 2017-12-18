import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './Lessons.css'

class Lessons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lesson: this.props.info
    }
  }

  render () {
    return (
      <div className="lesson-box">
        <img className='lesson-icon' src={lesson.lessonImage} alt={lesson.name}/>
        <Link to=`{/subjects/${this.props.match.params.subject_id}/lesson/${lesson._id}}`>{lesson.name}</Link>
      </div>
    )
  }
}
