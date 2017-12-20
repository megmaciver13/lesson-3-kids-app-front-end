import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: [{
        image: '',
        text: '',
        isCorrect: false
      }],
      numAnswers: 4
    }
  }

  render() {
    return(
      <div>
        <h1>Create a New Question</h1>
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
          <input type="submit" value="Add Answer"/>
        </form>
      </div>
    )
  }
}

class CreateQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: [{
        image, text, isCorrect
      }],
      numAnswers: 4
    }
  }
  render() {
    return (
      div
        form
          input name="question"
          {Array(this.state.numAnswers).map((i, index) => {
            input image onChange(update answers array)
            input text name=answers[index][text]
            input isCorrect
          })}
          button submit
        button Add Answer onClick, increment numAnswers
    )
  }
}

// on our server:
body: {
  question: "What is the first letter of the alphabet?",
  answers: {
    "0": {
      image: "http://www.fillmurray.com/300/300",
      text: "what ever",
      isCorrect: "false"
    },
    "1": {
      image: "http://www.fillmurray.com/300/300",
      text: "what ever",
      isCorrect: "false"
    },
    "2": {
      image: "http://www.fillmurray.com/300/300",
      text: "what ever",
      isCorrect: "false"
    },
    "3": {
      image: "http://www.fillmurray.com/300/300",
      text: "what ever",
      isCorrect: "false"
    },
  }
}
