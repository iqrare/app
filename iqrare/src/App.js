import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import sampleApp from './component/sampleApp' 
import aboutus from './component/aboutus' 
import Startpg from './component/Startpg' 
import './App.css';

function App() {
  return (
    <div>
      <Router>
       <Startpg/> 
        <div class ="container">
         
        <Switch>
          <Route path = '/' exact component = {sampleApp}></Route>
          <Route path = '/about' exact component = {aboutus}></Route>
       
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
