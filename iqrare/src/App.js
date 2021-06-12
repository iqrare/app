import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
 
import Startpg from './component/Startpg' 


function App() {
  return (
    <div>
      <Router>
       
      
         
        <Switch>
          <Route path = '/' exact component = {Startpg}></Route> 
       
          </Switch>
        
        </Router>
    </div>
  );
}

export default App;
