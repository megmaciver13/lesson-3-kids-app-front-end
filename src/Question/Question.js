import React, { Component } from 'react'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      answers: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      .then(lesson =>
        this.setState({
          question: lesson.data.question,
          answers: lesson.data.answers
        })
      )
      .catch(err => console.log(err))
  }

  render () {
    return(
      <div>
        <h2>{this.state.question}</h2>
          <div>
            <img src={(this.state.answers)[0][image]} alt={(this.state.answers)[0][text]} />
          </div>
          <div>
            <img src={(this.state.answers)[1][image]} alt={(this.state.answers)[1][text]} />
          </div>
          <div>
            <img src={(this.state.answers)[2][image]} alt={(this.state.answers)[2][text]} />
          </div>  
      </div>
    )
  }
}

export default Question
