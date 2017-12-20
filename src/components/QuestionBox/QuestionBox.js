import React, { Component } from 'react'

import './QuestionBox.css'

class QuestionBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: this.props.info,
      hasClickedImage: false,
      answerChoice: {},
      answeredCorrectly: false
    }
  }

  showCorrectMessage () {
    console.log('correct')
  }

  showWrongMessage () {
    console.log('wrong')
  }

  checkIfCorrect () {
    if (this.state.answerChoice.isCorrect) {
      this.setState({
        answeredCorrectly: true
      })
      this.showCorrectMessage()
    } else {
      this.showWrongMessage()
    }
  }

  onClickImage (e) {
    e.preventDefault()
    console.log(e.target)
    this.setState({
      hasClickedImage: true,
      answerChoice: e.target
    })

    this.checkIfCorrect()
  }



  render () {
    console.log(this.state.question)
    return(
      <div>
        <h2>{this.state.question.question}</h2>
        <div className="question-box-container">
          <div className="question-box">
              <div className="question-box-item" onClick={e => this.onClickImage(e)}>
                <img src={(this.state.question.answers)[0]['image']} alt={(this.state.question.answers)[0]['text']} />
              </div>
              <div className="question-box-item" onClick={e => this.onClickImage(e)}>
                <img src={(this.state.question.answers)[1]['image']} alt={(this.state.question.answers)[1]['text']} />
              </div>
              <div className="question-box-item" onClick={e => this.onClickImage(e)}>
                <img src={(this.state.question.answers)[2]['image']} alt={(this.state.question.answers)[2]['text']} />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionBox
