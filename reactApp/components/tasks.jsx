import React from "react";
import ReactDOM from "react-dom";
import Task from "./task.jsx";

class Tasks extends React.Component {
  remove(index) {
    this.props.remove(index);
  }
  markDone(index) {
    this.props.markDone(index);
    
  }
  render() {
    var self = this;
    return (
      <div>
        <ul className="list-group">
          {this.props.tasks.tasks.map((task, index) => {
            return (
              <Task
                task={task}
                key={index}
                remove={self.remove.bind(self)}
                markDone={self.markDone.bind(self)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Tasks;
