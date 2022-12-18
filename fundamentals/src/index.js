import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";
import App from "./components/App";
import Counter from "./components/Counter";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <Todo />
  </React.StrictMode>
);
