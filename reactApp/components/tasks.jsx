import React from "react";

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.tasks.map(function(task, index) {
            return <li className="list-group-item" key={index}>{task.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Tasks;
