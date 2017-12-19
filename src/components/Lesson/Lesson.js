import React, { Component } from 'react'

import './Lesson.css'

class Lesson extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lesson: {}
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/subjects/${this.props.match.params.subject_id}/lesson/${this.props.match.params._id}`)
      .then(lesson =>
        this.setState({
          lesson: lesson.data
        })
      )
      .catch(err => console.log(err))
  }

  render () {
    let questions = this.state.lesson.questions.map((question, i) +. {
      return <Question info={question} key={i} />
    })
    return (
      <div className="questions">
        {questions}
        <p>Hello World</p>
      </div>
    )
  }
}

export default Lesson
