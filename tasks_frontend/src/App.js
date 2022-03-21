import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router } from "./Router";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:8000/task")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "getTask", payload: res });
      });
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
