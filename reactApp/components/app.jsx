import React from "react";
import Tasks from "./tasks.jsx";
import AddTask from "./addTask.jsx";

import { connect } from "react-redux";

const initArray = [
  { name: "sex", id: 0, done: false },
  { name: "coffe", id: 1, done: false }
];

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
    //this.state.todos.push({ name: taskName });
    //var newArray = this.reviewId(this.state.todos);
    //this.setState({ todos: newArray });
    console.log(this.props.testTodos);
  }
  remove(index) {
    this.state.todos.splice(index, 1);
    var newArray = this.reviewId(this.state.todos);
    this.setState({ todos: newArray });
  }
  markDone(index) {
    this.state.todos[index].done = !this.state.todos[index].done;
    this.setState({ todos: this.state.todos });
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
    console.log(this.props.testTodos);
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
    onAddTask: (taskName) => {
      dispatch({ type: "ADD_TASK", payload: taskName });
    }
  })
)(App);
