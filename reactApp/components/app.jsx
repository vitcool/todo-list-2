import React from "react";
import Tasks from "./tasks.jsx";
import AddTask from "./addTask.jsx";

const initArray = [
  {name:"sex", id:0},
  {name:"coffe", id:1}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: initArray
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  addNewTask(taskName) {
    this.state.todos.push({name: taskName});
    var newArray = this.reviewId(this.state.todos);
    this.setState({ todos: newArray });
  }
  removeTask(index){
    this.state.todos.splice(index,1);
    var newArray = this.reviewId(this.state.todos);
    this.setState({ todos: newArray });
  }
  reviewId(todosArray){
    var resultArray = [];
    var index = 0;
    todosArray.map((todo)=>{
      var todoObj = {
        name:todo.name,
        id:index
      }
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
        <AddTask addNew={this.addNewTask}/>
        <Tasks tasks={this.state.todos} remove={this.removeTask}/>
      </div>
    );
  }
}

export default App;
