import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: [], 
    error: '', 
    todoNameInput: '', 
    displayCompleteds: true
  }

 onChange = (evt) =>  {
  this.setState({...this.state, todoNameInput: evt.target.value})
  console.log(this.state.todoNameInput)

 }

 fetchAllTodos() {
  axios.get(URL)
  .then(res => {
    console.log(res.data.data)
  })
 }

 componentDidMount() {
  this.fetchAllTodos()
 }

  render() {
    return (
      <div>
      <header>TODOS:</header>
      {this.state.todos}
      <form>
        <input type="text" placeholder="enter task" onChange={this.onChange}/>
        <button>Submit</button>
      </form>
      </div>
    )
  }
}
