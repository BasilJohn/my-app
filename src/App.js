import React, { Component } from 'react';
import './App.css';
import SignUp from './screens/SignUp';

class App extends Component {

  render() {
    return (
      <div className="app background">
        <SignUp />
      </div>
    );
  }
}

export default App;
