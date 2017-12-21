import React, { Component } from 'react'
import axios from 'axios'

import SubjectBox from '../SubjectBox/SubjectBox'
import './Home.css'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subjects: []
    }
  }

  componentDidMount () {
    axios.get('https://kids-app-back-end.herokuapp.com/subjects')
      .then(subjects => {
        console.log(subjects.data)
        this.setState({
          subjects: subjects.data
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let subjectBoxes = this.state.subjects.map((subject, i) => {
      return <SubjectBox info={subject} key={i} />
    })
    return (
      <div className="home">
        <h1 className="home-header">Choose a subject below to get learning!</h1>
        <div className="subjects">
          {subjectBoxes}
        </div>
      </div>
    )
  }
}

export default Home
