import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TodoListItem } from "./TodoListItem";
import { useLocation } from "react-router-dom";

export const Tasks = () => {
  const tasks = useSelector((res) => res.tasks);
  const pages = useSelector((res) => res.pages);
  const curPage = parseInt(useSelector((res) => res.curPage));
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(pages, curPage);
  const prev = () => {
    fetch(`http://localhost:8000/task?pageNum=${curPage - 1}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "getTask", payload: res });
      });
  };
  const next = () => {
    fetch(`http://localhost:8000/task?pageNum=${curPage + 1}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "getTask", payload: res });
      });
  };
  //   useEffect(() => {}, [tasks]);
  console.log("k", tasks);
  return (
    <div>
      {tasks.map((res) => (
        <div key={res._id}>
          <hr />
          <TodoListItem item={res} />
          <hr />
        </div>
      ))}
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </div>
  );
};
