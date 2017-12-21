import React, { Component } from "react"
import axios from "axios"
import {
  withRouter
} from 'react-router-dom'

class UpdateLesson extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lesson: this.props.lesson,
    }
    this.updateLessonName = this.updateLessonName.bind(this)
    this.updateLessonImage = this.updateLessonImage.bind(this)
    console.log(this.props)
  }

  handleSubmit (e) {
    let updatedLesson = {
      name: this.state.lesson.name,
      lessonImage: this.state.lesson.lessonImage
    }
    e.preventDefault()
    axios
      .put(`https://kids-app-back-end.herokuapp.com/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}/questions`, updatedLesson)
      .then(response => {
        console.log(response)
        this.props.history.push(`/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      })
      .catch(err => console.log(err))
  }

  updateLessonName (e) {
    this.setState({
      lesson: {...this.state.lesson, name: e.target.value}
    })
  }

  updateLessonImage (e) {
    this.setState({
      lesson: {...this.state.lesson, lessonImage: e.target.value}
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            value={this.state.lesson.name}
            onChange={this.updateLessonName}
          />
          <input
            type="text"
            name="lessonImage"
            value={this.state.lesson.lessonImage}
            onChange={this.updateLessonImage}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default withRouter(UpdateLesson)
