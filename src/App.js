import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Catalog, Cart, activeTheme} from './Bootstrap';
import Theme from './Theme/Theme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to React</h2>
        </header>
        <Theme activeTheme={activeTheme} />
        <Catalog />
        <Cart />
      </div>
    );
  }
}

export default App;
