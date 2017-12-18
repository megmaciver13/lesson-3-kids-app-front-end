import React, {Component} from 'react'
import './SubjectBox.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

class subject extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.subject.name,
      subjectImage: this.props.subject.subjectImage,
      id: this.props.subject._id
    }
  }
  render() {
    let {name, subjectImage, lessons} = this.state
    return(
      <div name="subject-container">
        <Link to={`/subjects/${this.state.id}`}>
          <img src={subjectImage} alt={name}/>
          <h2 subName="subject-name">{name}</h2>
        </Link>
      </div>
    )
  }
}

export default subject
