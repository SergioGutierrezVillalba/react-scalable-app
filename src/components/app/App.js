import React, { memo } from "react";
import logo from "../../images/logo.svg";
import "./App.css";
import useApp from "./hooks";

function App() {
  const { total, addOne, substractOne } = useApp();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="total">Total: {total}</div>
      </header>

      <div className="App-body">
        <button onClick={() => addOne()}> Add </button>
        <button onClick={() => substractOne()}> Substract </button>
      </div>
    </div>
  );
}

export default memo(App);
