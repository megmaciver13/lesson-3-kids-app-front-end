import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        </nav>
      </div>
    )
  }
}

export default Nav
