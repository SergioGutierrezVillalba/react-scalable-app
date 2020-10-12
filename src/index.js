import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import * as serviceWorker from "./serviceWorker";
import { Router } from "./routes";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <Router />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
