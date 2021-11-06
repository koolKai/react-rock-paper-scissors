import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.scss";
import { BrowserRouter as Router } from "react-router-dom";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  mountNode
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
