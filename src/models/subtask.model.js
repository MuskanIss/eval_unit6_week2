const mongoose = require("mongoose");

let subtaskSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  status: { type: Boolean, required: true },
  //   task: { type: mongoose.Schema.Types.ObjectId, ref: "task", required: true },
});

SubTask = mongoose.model("subtask", subtaskSchema);

module.exports = SubTask;
