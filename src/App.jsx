import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "./App.css";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <button id="startgame">Start</button>
    </div>
  );
};

export default App;
