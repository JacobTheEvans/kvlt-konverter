import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Faq from './components/Faq'
import Bots from './components/Bots'
import CiCd from './components/CiCd'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          exact
          path='/faq'
          component={Faq}
        />
        <Route
          exact
          path='/bots'
          component={Bots}
        />
        <Route
          exact
          path='/ci-cd'
          component={CiCd}
        />
      </Switch>
    </Router>
  )
}

export default App
