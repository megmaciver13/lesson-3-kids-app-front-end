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
      }],
      numAnswers: 4
    }
  }

  handleQuestionTitle(e) {
    e.preventDefault()
    this.setState({
      question: e.target.value
    })
  }

  addAnswer(e) {
    e.preventDefault()
    this.setState({
      numAnswers: this.state.numAnswers ++
    })
  }

  render () {
    return (
      <div>
        <h1>Create a New Question</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="question" placeholder="Type Question Here" onChange={this.handleQuestionTitle} />
          <br />
          <br />
          <div className="answer-choices">
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

// earlier attempt:
//
// <form onSubmit={e => this.handleSubmit(e)}>
//   <input
//     type="text"
//     name="question"
//     placeholder="Type Question Here"
//     onChange={this.handleQuestionTitle}
//   />
//   {Array(this.state.numAnswers).map((i, index) => {
//     <input type="text" name="image" placeholder="Image Url" onChange={this.updateAnswersArray} />
//     <input type="text" name=answers[index][text] placeholder="Answer Text" onChange={this.updateAnswersArray} />
//     <input type="" name="isCorrect"/>
//
//   })}
//   <input type="submit" value="Submit Question" />
//   <input type="submit" value="Add Answer" onSubmit={this.addAnswer}/>
// </form>
//
// // Zakk's work:
//
//   render() {
//     return (
//       div
//         form
//           input name="question"
//           {Array(this.state.numAnswers).map((i, index) => {
//             input image onChange(update answers array)
//             input text name=answers[index][text]
//             input isCorrect
//           })}
//           button submit
//         button Add Answer onClick, increment numAnswers
//     )
//   }
// }
//
// // on our server:
// body: {
//   question: "What is the first letter of the alphabet?",
//   answers: {
//     "0": {
//       image: "http://www.fillmurray.com/300/300",
//       text: "what ever",
//       isCorrect: "false"
//     },
//     "1": {
//       image: "http://www.fillmurray.com/300/300",
//       text: "what ever",
//       isCorrect: "false"
//     },
//     "2": {
//       image: "http://www.fillmurray.com/300/300",
//       text: "what ever",
//       isCorrect: "false"
//     },
//     "3": {
//       image: "http://www.fillmurray.com/300/300",
//       text: "what ever",
//       isCorrect: "false"
//     },
//   }
// }
