import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'

import lastHundredURL from '../screens/lastHundredURLScreen'
import numberOfVisits from  '../screens/numberOfVisitsScreen'
import shortenedURL from '../screens/shortenedURLScreen'
import topTenURL from '../screens/topTenURLScreen'

const Routes =()=>(
  <BrowserRouter>
    <div>
      
      <Route exact path="/" component={shortenedURL}/>
      <Route exact path="/numberOfVisits" component={numberOfVisits}/>
      <Route exact path = "/lastHundredURL" component ={lastHundredURL}/>
      <Route exact path = "/topTenURL" component ={topTenURL}/>

    </div>
  </BrowserRouter>
)

export default Routes
