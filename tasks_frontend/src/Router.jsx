import React from "react";
import { Route, Routes } from "react-router-dom";
import { Input } from "./Components/Input";
import { SubTasks } from "./Components/SubTasks";
import { Tasks } from "./Components/Tasks";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<SubTasks />} />
      </Routes>
    </div>
  );
};
