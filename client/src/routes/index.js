import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'

import lastHundredURL from '../screens/lastHundredURL'
import numberOfVisits from  '../screens/numberOfVisits'
import shortenedURL from '../screens/shortenedURL'
import topTenURL from '../screens/topTenURL'

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
