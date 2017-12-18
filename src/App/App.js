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
import Nav from '../Nav/Nav'
import Lesson from '../Lesson/Lesson'
import Lessons from '../Lessons/Lessons'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route
              path='/'
              component={Home}
            />
            <Route
              path='/subjects'
              render={() => <Redirect to='/' />}
            />
            <Route
              path='/subjects/:_id'
              component={Lessons}
            />
            <Route
              path='/subjects/:_id/lesson/:_id'
              component={Lesson}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
