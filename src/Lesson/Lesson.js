import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import './Lesson.css'

class Lesson extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

export default Lesson
