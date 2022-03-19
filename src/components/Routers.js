import React from 'react'
import { Router, Route } from  'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './Home'

const history = createBrowserHistory()

export default () => {
  return(
    <Router history={ history }>
      <Route path='/' component={Home}/>
    </Router>
  )
}
