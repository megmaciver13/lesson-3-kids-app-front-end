import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  render () {
    return (
      <div>
        <nav>
          <div className="home">
            <Link to='/'>Home</Link>
          </div>
          <div className="about">
            <Link to='/about'>About</Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
