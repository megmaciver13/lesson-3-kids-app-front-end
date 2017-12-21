import React, { Component } from 'react'
import {
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'

import Home from '../Home/Home'
import Lesson from '../Lesson/Lesson'
import Lessons from '../Lessons/Lessons'
import Nav from '../Nav/Nav'
import About from '../About/About'
import NewLesson from '../NewLesson/NewLesson'
import NewQuestion from '../NewQuestion/NewQuestion'


class App extends Component {
  render () {
    return (
      <div className="app">
        <Nav />
        <main>
          <Switch>
            <Route
              exact path='/'
              render={props => <Home {...props} />}
            />
            <Route
              path='/about'
              component={About}
            />
            <Route
              exact path='/subjects/:subject_id'
              render={props => <Lessons {...props} />}
            />
            <Route
              exact path='/subjects/:subject_id/lesson/:_id'
              render={props => <Lesson {...props} />}
            />
            <Route
              exact path='/subjects/:subject_id/lesson'
              render={props => <NewLesson {...props} />}
            />
            <Route
              path='/subjects/:subject_id/lesson/:id/question'
              render={props => <NewQuestion {...props} />}
            />
            <Route
              path='/*'
              render={() => <Redirect to='/' />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
