import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app background">
          <main>
            <Switch>
              <Route exact path="/" component={SignUp} />
              <Route path="/home" component={Home} />
            </Switch>
          </main>
        </div>

      </Router>
    );
  }
}

export default App;
