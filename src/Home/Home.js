import React, { Component } from 'react'
import SubjectBox from '../SubjectBox/SubjectBox'

import './Home.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
       subjects: []
     }
   }

  render () {
    let subjectBoxes = this.state.subjects.map((subject, i) => {
      return <SubjectBox info={subject} key={i} />
    })
    return (
      <div>
        <div className="subjects">
          {subjectBoxes}
        </div>
      </div>
    )
  }
}

export default Home
