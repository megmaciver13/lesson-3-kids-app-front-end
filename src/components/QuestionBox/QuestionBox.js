import React, { Component } from 'react'

import './QuestionBox.css'

class QuestionBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: this.props.info,
      hasClickedImage: false,
      answerChoice: ''
    }
  }

  checkIfCorrect () {
    let correctAnswer = this.props.info.answers.findIndex(answer =>{
        return answer.isCorrect === true
    })
    if (correctAnswer === parseInt(this.state.answerChoice)) {
      console.log('correct!')
    } else {
      console.log('wrong!')
    }
  }

  onClickImage (e) {
    e.preventDefault()
    console.log(e.target)
    this.setState({
      hasClickedImage: true,
      answerChoice: e.target.dataset.answer
    }, this.checkIfCorrect
    )
    console.log(this.props.info.answers)
  }



  render () {
    console.log(this.state.question)
    return(
      <div>
        <h2 className="question-text">{this.state.question.question}</h2>
        <div className="question-box-container">
          <div className="question-box">
              <div className="question-box-item" onClick={e => this.onClickImage(e)}>
                <img src={(this.state.question.answers)[0]['image']} data-answer='0' alt={(this.state.question.answers)[0]['text']} />
              </div>
              <div className="question-box-item" onClick={e => this.onClickImage(e)}>
                <img src={(this.state.question.answers)[1]['image']} data-answer='1' alt={(this.state.question.answers)[1]['text']} />
              </div>
              <div className="question-box-item" onClick={e => this.onClickImage(e)}>
                <img src={(this.state.question.answers)[2]['image']} data-answer='2' alt={(this.state.question.answers)[2]['text']} />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionBox
