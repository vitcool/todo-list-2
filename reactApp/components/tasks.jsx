import React from "react";
import ReactDOM from "react-dom";
import Task from "./task.jsx";

class Tasks extends React.Component {
  removeTask(index) {
    this.props.remove(index);
  }
  render() {
    var self = this;
    return (
      <div>
        <ul className="list-group">
          {this.props.tasks.map((task, index) => {
            return (
              <Task
                task={task}
                key={index}
                remove={self.removeTask.bind(self)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Tasks;
