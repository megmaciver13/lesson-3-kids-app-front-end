import React, {Component} from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div className="about-container">
        <h1 className="about-title">About the App</h1>
        <p className="about-text">LearnNGrow was created by Meg MacIver,
            Stella Gordon-Zigel and Charles Wilner,
            Web Development Immersive students at
            General Assembly in Washington, D.C. They came
            up with the idea during a group brainstorming
            session and were excited to build a creative
            app, different than all of their previous projects.
        </p>
        <p className="about-text">
            LearnNGrow is a visual learning app in the style of
            short, visual quizzes intended to help young children
            learn in an engaging environment. Parents also have
            the capability of adding their own lessons geared
            to their children{`'`}s interests and learning needs.
            Enjoy the app!!
        </p>
  </div>
    )
  }
}

export default About
