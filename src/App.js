import React, { Component } from 'react';
import logo from './makentnu logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="grid-item" id="appHeader">
          <h1>Lik oss på facebook/MAKE NTNU :D</h1>
        </header>

        <body className="grid-item" id="appLogo">
          <img src={logo} alt="logo" />
          <div>Så mange likes har vi dah</div>
        </body>
        <footer className="grid-item" id="who">I like turtles</footer>

      </div>
    );
  }
}

export default App;
