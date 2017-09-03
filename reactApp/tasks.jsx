import React from "react";

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(function(task, index) {
            return <li key={index}>{task.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Tasks;
