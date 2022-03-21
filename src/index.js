const express = require("express");
const PORT = 8000;
const cors = require("cors");
const DB_URL =
  "mongodb+srv://muskanIss:1234@cluster0.ah2iy.mongodb.net/tasksdb?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const task = require("./controller/task.controller");
const subtask = require("./controller/subtask.controller");
const app = express();
app.use(cors());
function connect() {
  return mongoose.connect(DB_URL);
}
app.use(express.json());
app.use("/task", task);
app.use("/subtask", subtask);
app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening");
  } catch (e) {
    console.log(e.message);
  }
});
