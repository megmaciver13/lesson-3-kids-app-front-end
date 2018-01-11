import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './SubjectBox.css'
import Lessons from '../Lessons/Lessons'

class SubjectBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.info.name,
      subjectImage: this.props.info.subjectImage,
      id: this.props.info._id
    }
  } // Here you are redefining state with the props you sent down, which technically gives you two copies of state; One as an array of objects that lives in App, and each individual object that live in SubjectBox.  It seems like you don't really need state here, and you could have this just be a presentational component.

  render () {
    console.log(this.state) // Get rid of all console.logs in production
    return (
      <div className="subject-container">
        <Link to={`/subjects/${this.state.id}`}>
          <img src={this.state.subjectImage} alt={this.state.name} />
          <h2 className="subject-name">{this.state.name}</h2>
        </Link>
      </div>
    )
  }
}

export default SubjectBox
