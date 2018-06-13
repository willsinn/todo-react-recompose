import React, { Component } from 'react';
import Header from './Components/Header';
import InputTodos from './Components/InputTodos';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="Todo-wrapper">
        <Header />
        <InputTodos />
      </div>
    );
  }
}

export default App;