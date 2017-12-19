import React, { Component } from 'react'
import {
  BrowserRouter as Router,
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

class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route
              path='/'
              render={props => <Home {...props} />}
            />
            {/* <Route
              path='/about'
              component={About}
            /> */}
            <Route
              path='/subjects'
              render={() => <Redirect to='/' />}
            />
            <Route
              exact path='/subjects/:subject_id'
              render={props => <Lessons {...props} />}
            />
            <Route
              exact path='/subjects/:subject_id/lesson/:_id'
              render={props => <Lesson {...props} />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
