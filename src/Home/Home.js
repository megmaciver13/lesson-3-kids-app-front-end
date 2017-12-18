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
    let showSubjects =
    if (this.state.subjectBoxs) {
    subjectBoxs = this.state.subjectBoxs.map((SubjectBox, i) => {
      return <Link {SubjectBox} />
    })
  }
    return (
      <div>
        <div className={"SubjectBox"}>
          {showSubjects}
        </div>
      </div>
    )
  }
}

export default Home
