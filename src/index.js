import React from "react";
import ReactDOM from "react-dom";

import Core from "./Core/index";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Core />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
