import React from "react";
import Tasks from "./tasks.jsx";
import AddTask from "./addTask.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosState: []
    };
    this.addNewTask = this.addNewTask.bind(this);
  }
  addNewTask(taskName) {
    this.state.todosState.push({name: taskName});
    this.setState({ todosState: this.state.todosState });
  }
  render() {
    return (
      <div className="todoApplication">
        <div className="appName text-center">
          <h2>ToDo app</h2>
        </div>
        <AddTask addNew={this.addNewTask}/>
        <Tasks tasks={this.state.todosState} />
      </div>
    );
  }
}

export default App;
