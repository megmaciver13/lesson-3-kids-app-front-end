import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './SubjectBox.css'

class subject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.info.name,
      subjectImage: this.props.info.subjectImage,
      id: this.props.info._id
    }
  }

  render () {
    return (
      <div className="subject-container">
        <Link to={`/subjects/${this.state._id}`}>
          <img src={this.state.subjectImage} alt={this.state.name} />
          <h2 className="subject-name">{this.state.name}</h2>
        </Link>
      </div>
    )
  }
}

export default subject
