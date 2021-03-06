import React, { Component } from 'react'
import store from '../store'

class TodoList extends Component {
	state = {
		todos: []
	}
	componentWillMount(){
		store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				todos: appState.todos
			})
		})
	}
  render() {
    return (
      <div>
      	<ul>
      		{this.state.todos.map(item =>{
      			return <li><input type="checkbox"/>{item.todo}<button>Delete</button></li>
      		})}
      	</ul>
      </div>
    )
  }
}

export default TodoList