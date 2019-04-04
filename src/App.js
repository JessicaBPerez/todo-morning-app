import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo.jsx";

class App extends Component {
  state = {
    todos: [],
    newTodo: ""
  };

  //Function to update the form's value while typing
  handleChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  //Adding new todos
  addNewTodo = newTodo => {
    newTodo.preventDefault();
    // const todos = [...this.state.todos];
    // todos.push(newTodo);

    this.setState({
      newTodo: "",
      todos: [...this.state.todos, this.state.newTodo]
    });
  };

  // Delete todo
  deleteTodos = todoIndex => {
    const todos = [...this.state.todos];
    todos.splice(todoIndex, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <h1>To-Do's</h1>
        {this.state.todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              // passing down original todos array
              individualTodo={todo}
              deleteTodos={this.deleteTodos}
            />
          );
        })}
        <form onSubmit={this.addNewTodo}>
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={this.handleChange}
              value={this.state.newTodo}
              name="name"
              placeholder="Enter name of todo"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add To-Do
          </button>
        </form>
      </div>
    );
  }
}

export default App;
