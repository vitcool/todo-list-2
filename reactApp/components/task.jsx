import React from "react";
import ReactDOM from "react-dom";

class Task extends React.Component {
  removeTask() {
    var taskId = this.props.task.id;
    this.props.remove(taskId);
  }
  render() {
    return (
      <li className="list-group-item list-group-item-action">
        <span
          className="glyphicon glyphicon-trash"
          aria-hidden="true"
          onClick={this.removeTask.bind(this)}
        />
        <span className="textTask">{this.props.task.name}</span>
      </li>
    );
  }
}

export default Task;
