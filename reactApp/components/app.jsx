import React from "react";
import Tasks from "./tasks.jsx";
import AddTask from "./addTask.jsx";

import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.testTodos
    };
    this.addNew = this.addNew.bind(this);
    this.remove = this.remove.bind(this);
    this.markDone = this.markDone.bind(this);
  }
  addNew(taskName) {
    this.props.onAddTask(taskName);
  }
  remove(index) {
    this.props.onRemoveTask(index);
  }
  markDone(index) {
    this.props.onMarkDone(index);
  }
  reviewId(todosArray) {
    var resultArray = [];
    var index = 0;
    todosArray.map(todo => {
      var status = todo.done !== undefined ? todo.done : false;
      var todoObj = {
        name: todo.name,
        id: index,
        done: status
      };
      resultArray.push(todoObj);
      index++;
    });
    return resultArray;
  }
  render() {
    return (
      <div className="todoApplication">
        <div className="appName text-center">
          <h2>ToDo app</h2>
        </div>
        <AddTask addNew={this.addNew} />
        <Tasks
          tasks={this.props.testTodos}
          remove={this.remove}
          markDone={this.markDone}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ testTodos: state }),
  dispatch => ({
    onAddTask: taskName => {
      dispatch({ type: "ADD_TASK", payload: taskName });
    },
    onRemoveTask: index => {
      dispatch({ type: "REMOVE_TASK", index: index });
    },
    onMarkDone: index => {
      dispatch({ type: "MARK_DONE", index: index });
    }
  })
)(App);
