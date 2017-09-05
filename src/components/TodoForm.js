import React, { Component } from 'react'
import { addTodo } from '../actions/todo'

class TodoForm extends Component {
	state = {
		todo: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		addTodo({
			todo: this.state.todo,
			value: ''
		})
	}
  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit}>
      		<input type="text" onChange={this.handleChange} name="todo" placeholder="todo" />
      		<button type="submit">Add Todo</button>
      	</form>
      </div>
    )
  }
}

export default TodoForm