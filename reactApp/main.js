import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import $ from "jquery";

const todos = [
  {
    name: "Eat"
  },
  {
    name: "Sleep"
  },
  {
    name: "Rave"
  }
];

ReactDOM.render(<App tasks={todos}/>, document.getElementById("app"));
