import React from "react";
import ReactDOM from "react-dom";
import TaskContainer from "./Containers/TaskContainer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <TaskContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
