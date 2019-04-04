import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <div>{this.props.individualTodo}</div>
        <button onClick={() => this.props.deleteTodos(this.props.index)}>
          Delete This To-Do
        </button>
      </div>
    );
  }
}
