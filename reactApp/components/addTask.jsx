import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
  }
  submitTask() {
    var textTask = this.refs.textInput.value;
    this.props.addNew(textTask);
    this.refs.textInput.value = "";
  }
  render() {
    return (
      <div className="form-group row">
        <label htmlFor="add-new-task" className="col-md-3 col-form-label">
          New task
        </label>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="Type here"
            id="add-new-task"
            value={this.taskName}
            ref="textInput"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary col-md-3"
          onClick={this.submitTask.bind(this)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTask;
