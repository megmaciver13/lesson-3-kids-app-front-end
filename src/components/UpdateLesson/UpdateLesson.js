import React, { Component } from "react"
import axios from "axios"

class UpdateLesson extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lesson: this.props.lesson,
      subject: this.props.subject
    }
    this.updateLessonText = this.updateLessonText.bind(this)
    this.updateLessonImage = this.updateLessonImage.bind(this)
  }

  handleSubmit (e) {
    let updatedLesson = {
      name: this.state.lesson.name,
      lessonImage: this.state.lesson.lessonImage
    }
    console.log(updatedLesson)
    e.preventDefault()
    axios
      .patch(`http://localhost:3001/subjects/${this.state.subject._id}/lesson/${this.state.lesson._id}/questions`, updatedLesson)
      .then(response => {
        console.log(response)
        this.props.history.push(`/subjects/${this.state.subject._id}/lesson/${this.state.lesson._id}`)
      })
      .catch(err => console.log(err))
  }

  updateLessonText (e) {
    this.setState({
      lesson: {
        lessonImage: e.target.value
      }
    })
  }

  updateLessonImage (e) {
    this.setState({
      lesson: {
        name: e.target.value
      }
    })
  }

  render () {
    console.log(this.state.lesson)
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            defaultValue={this.state.lesson.name}
            onChange={this.updateLessonName}
          />
          <input
            type="text"
            name="lessonImage"
            defaultValue={this.state.lesson.lessonImage}
            onChange={this.updateLessonImage}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default UpdateLesson
