import React, { Component } from 'react';
import Header from './Components/Header';
import TodoItems from './Components/TodoItems';
import TodoInputs from './Components/TodoInputs';



import './App.css';

class App extends Component {



  render() {
    return (
      <div className="Todo-wrapper">
        <Header />
        <TodoInputs />
        <TodoItems />
      </div>
    );
  }
}

export default App;
