import React from "react";
import { TodoListItem } from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const SubTasks = () => {
  const tasks = useSelector((res) => res.tasks);
  const location = useLocation();
  const index = location.pathname.lastIndexOf("/");
  const id = location.pathname.slice(index + 1);
  console.log(id);
  return (
    <div>
      {tasks.map((res) => {
        if (res._id == id) {
          return <TodoListItem item={res} />;
        }
      })}
    </div>
  );
};
