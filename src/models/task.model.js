const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  status: { type: Boolean, required: true },
  subtasks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "subtask", required: true },
  ],
});

Task = mongoose.model("task", taskSchema);

module.exports = Task;
