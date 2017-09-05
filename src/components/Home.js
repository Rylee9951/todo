import React, { Component } from 'react';
import '../styles/App.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
