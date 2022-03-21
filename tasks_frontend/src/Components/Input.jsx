import { useDispatch } from "react-redux";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Input() {
  const [taskTitle, settaskTitle] = useState("");
  const [taskstatus, settaskStatus] = useState(false);
  const [subtaskTitle, setsubtaskTitle] = useState("");
  const [subtaskstatus, setsubTaskStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    var data = {
      title: taskTitle,
      status: taskstatus,
      subtasks: [],
    };
    console.log("data", data);
    fetch("http://localhost:8000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetch("http://localhost:8000/task")
          .then((res) => res.json())
          .then((res) => {
            dispatch({ type: "getTask", payload: res });
          });
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/tasks");
  };
  return (
    <div>
      <form>
        <label for="tasktitle">Task title</label>
        <input
          type="text"
          id="title"
          name="tasktitlr"
          placeholder="Task"
          value={taskTitle}
          onChange={(e) => {
            settaskTitle(e.target.value);
          }}
        />
        <label for="taskstatus">Task Status</label>
        <input
          type="checkbox"
          id="taskstatus"
          name="taskstatus"
          value={taskstatus}
          onChange={(e) => {
            settaskStatus(e.target.checked);
          }}
        />
        <label for="subtask">Subtask Title</label>
        <input
          type="text"
          id="subtask"
          name="subtask"
          placeholder="SubTask"
          value={subtaskTitle}
          onChange={(e) => {
            setsubtaskTitle(e.target.value);
          }}
        />
        <label for="subtaskstatus">SubTask Status</label>
        <input
          type="checkbox"
          id="subtaskstatus"
          name="subtaskstatus"
          value={subtaskstatus}
          onChange={(e) => {
            setsubTaskStatus(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            submitHandler(e);
          }}
        />
      </form>
    </div>
  );
}
