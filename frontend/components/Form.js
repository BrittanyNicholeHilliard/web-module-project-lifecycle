import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
    <>
      <form id="todoForm" onSubmit={this.props.todoFormSubmit}>
        <input 
          type="text" 
          placeholder="Type task" 
          onChange={this.props.inputChange} 
          value={this.props.todoNameInput} />
        <input type="submit" />         
      </form>
     <button onClick={this.props.toggleDisplayCompleteds} >
       {this.props.displayCompleteds ? "Hide" : "Show"} Completed 
       </button>
    </>
    )
  }
}
