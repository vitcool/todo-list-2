import React from "react";
import ReactDOM from "react-dom";

class Task extends React.Component {
  remove() {
    var taskId = this.props.task.id;
    this.props.remove(taskId);
  }
  markDone() {
    var taskId = this.props.task.id;
    this.props.markDone(taskId);
  }
  render() {
    if (this.props.task.done) {
      return (
        <li className="list-group-item list-group-item-action">
          <span
            className="glyphicon glyphicon-remove"
            aria-hidden="true"
            onClick={this.markDone.bind(this)}
          />
          <span className="textTask taskDone">{this.props.task.name}</span>
          <span
            className="glyphicon glyphicon-trash deleteButton"
            aria-hidden="true"
            onClick={this.remove.bind(this)}
          />
        </li>
      );
    }
    return (
      <li className="list-group-item list-group-item-action">
        <span
          className="glyphicon glyphicon-ok"
          aria-hidden="true"
          onClick={this.markDone.bind(this)}
        />
        <span className="textTask">{this.props.task.name}</span>
        <span
          className="glyphicon glyphicon-trash deleteButton"
          aria-hidden="true"
          onClick={this.remove.bind(this)}
        />
      </li>
    );
  }
}

export default Task;
