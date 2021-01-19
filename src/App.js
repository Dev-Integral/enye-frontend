import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";

import NavWrapper from './pages/NavWrapper'
import Dashboard from './pages/Dashboard';

class App extends Component{
  render(){
    return (
      <Router>
        <Route
          path='/'
          exact={true}
          render={props=>(
            <NavWrapper>
              <Dashboard {...props} />
            </NavWrapper>
          )}
        />
      </Router>
    );
  }
  
}

export default App;
