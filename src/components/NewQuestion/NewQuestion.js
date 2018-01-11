import React, { Component } from 'react'
import axios from 'axios'

class NewQuestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question: '',
      answers: [
        {
          image: '',
          text: '',
          isCorrect: false
        }
      ]
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
    let newQuestion = { // Try to not have this be the same name as the component
      question: this.state.question,
      answers: this.state.answers
    }
    // That's a long URL! Good job getting this all up. One thing you can do to make this easier is to save `this.props.match.params._id` as a local variable
    axios
      .post(`https://kids-app-back-end.herokuapp.com/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}/questions`, newQuestion)
      .then(response => {
        console.log(response) // Lose this guy!
        this.props.history.push(`/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <h1>Create a New Question</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="question" placeholder="Type Question Here" onChange={this.handleQuestionTitle} />
          <br />
          <br /> {/* I'm not really a fan of line breaks, especially 2 in a row - use margins for that. You should probably wrap each answer-choice in a separate `div` and style them that way. */}
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
          </div> {/* Look into `radio button inputs` to make sure a user can only select one correct answer */}
          <br />
          <input type="submit" value="Submit Question" />
        </form>
      </div>
    )
  }
}

export default NewQuestion
