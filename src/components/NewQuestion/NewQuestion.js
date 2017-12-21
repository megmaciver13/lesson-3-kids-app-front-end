import React, { Component } from 'react'
import axios from 'axios'

class NewQuestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question: '',
      answers: [{
        image: '',
        text: '',
        isCorrect: false
      }]
    }
    this.handleQuestionTitle = this.handleQuestionTitle.bind(this)
    this.handleAnswers = this.handleAnswers.bind(this)
  }

  handleQuestionTitle(e) {
    this.setState({
      question: e.target.value
    })
  }

  handleAnswers(e) {
    this.setState({
      answers: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let newQuestion = {
      question: this.state.question,
      answers: this.state.answers
    }
  }

  axios
    .post(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}/questions`, newQuestion)
    .then(response => {
      console.log(response)
      this.props.history.push(`/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
    })
    .catch(err => console.log(err))

  render () {
    return (
      <div>
        <h1>Create a New Question</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="question" placeholder="Type Question Here" onChange={this.handleQuestionTitle} />
          <br />
          <br />
          <div className="answer-choices" onChange={this.handleAnswers}>
            <input type="text" name="answers[0][image]" placeholder="Answer Choice 1: Image Url" />
            <input type="text" name="answers[0][text]" placeholder="Answer Choice 1: Text" />
            <input type="checkbox" name="answers[0][isCorrect]" value="true"/> <span>This is the correct answer.</span><br />
            <br />
            <input type="text" name="answers[1][image]" placeholder="Answer Choice 1: Image Url" />
            <input type="text" name="answers[1][text]" placeholder="Answer Choice 1: Text" />
            <input type="checkbox" name="answers[1][isCorrect]" value="true"/> <span>This is the correct answer.</span><br />
            <br />
            <input type="text" name="answers[2][image]" placeholder="Answer Choice 1: Image Url" />
            <input type="text" name="answers[2][text]" placeholder="Answer Choice 1: Text" />
            <input type="checkbox" name="answers[2][isCorrect]" value="true"/> <span>This is the correct answer.</span><br />
          </div>
          <br />
          <input type="submit" value="Submit Question" />
        </form>
      </div>
    )
  }
}

export default NewQuestion
