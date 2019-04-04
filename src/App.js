import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        todo: "clean garage"
      }
    ],
    newTodo: {
      name: ""
    }
  };

  //Function to update the form's value while typing
  handleChange = event => {
    const cloneNewTodo = { ...this.state.newTodo };
    cloneNewTodo[event.target.name] = event.target.value;
    this.setState({ newTodo: cloneNewTodo });
  };

  render() {
    return (
      <div className="App">
        <h1>App Here</h1>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={this.handleChange}
              value={this.state.newTodo.name}
              name="name"
              placeholder="Enter name of todo"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
