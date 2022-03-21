import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let deleted = () => {
    fetch(`http://localhost:8000/task/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("http://localhost:8000/task")
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            dispatch({ type: "getTask", payload: res });
          })
      );
  };
  let updated = () => {
    // fetch(`http://localhost:8000/task/${item._id}`, {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //       task:,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    // }).then((res) => res.json()).then((res) =>
    //     fetch("http://localhost:8000/task")
    //       .then((res) => res.json())
    //       .then((res) => {
    //         console.log(res);
    //         dispatch({ type: "getTask", payload: res });
    //       })
    //   );
  };
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <Link to={`${location.pathname}/${item._id}`}>
        {" "}
        <div>Task {item.title}</div>
      </Link>
      <div>{item.status ? "true" : "false"}</div>
      {item.subtasks.map((res) => {
        return (
          <div>
            {" "}
            Subtask
            <div>{res.title}</div>
            <div>{res.status}</div>
          </div>
        );
      })}
      <button onClick={() => deleted()}>DELETE</button>
      <button onClick={() => updated()}>UPDATE</button>
    </div>
  );
};
