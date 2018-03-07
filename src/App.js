import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { MyComponent } from './components/Examples.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <MyComponent
            path={"http://www.mocky.io/v2/5a9ffffe2e0000d93f74d336"}
            render={({ data }) => {
              return <span>{data.title}</span>
            }}
          
           />
        </p>
      </div>
    );
  }
}

export default App;
