import React, { Component } from "react"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"

class NewLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      lessonImage: null
    }
    this.handleName = this.handleName.bind(this)
    this.handleLessonImage = this.handleLessonImage.bind(this)
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleLessonImage(e) {
    this.setState({
      lessonImage: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let newLesson = {
      name: this.state.name,
      lessonImage: this.state.lessonImage
    }

    axios
      .post(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson`, newLesson)
      .then((response) => {
        console.log(response)
        this.props.history.push(`/subjects/${this.props.match.params.subject_id}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Create a New Lesson!</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="Lesson Name"
            onChange={this.handleName}
          />
          <input
            type="text"
            name="lessonImage"
            placeholder="Icon URL"
            onChange={this.handleLessonImage}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewLesson
