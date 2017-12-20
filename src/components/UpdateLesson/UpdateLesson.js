import React, { Component } from "react"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"

class UpdateLesson extends Component {
  render() {
    let { lesson } = this.props

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            value={lesson.name}
            onChange={this.props.updateLesson}
          />
          <input
            type="text"
            name="lessonImage"
            value={lesson.lessonImage}
            onChange{...this.props.updateLesson}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default UpdateLesson
