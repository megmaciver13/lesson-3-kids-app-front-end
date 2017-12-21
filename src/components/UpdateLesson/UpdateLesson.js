import React, { Component } from "react"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"

class UpdateLesson extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)

    this.state = {
      lesson: this.props.lesson
    }
    this.updateLessonText = this.updateLessonText.bind(this)
    this.updateLessonImage = this.updateLessonImage.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.lesson)
    axios
      .patch(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}/questions`,
        {
          name: this.state.lesson.name,
          lessonImage: this.state.lesson.lessonImage
        }
      )
      .then(response => {
        console.log(response)
        this.props.history.push(`/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
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
