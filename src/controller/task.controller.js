const express = require("express");
const Task = require("../models/task.model");
const model = require("./item.controller");
let router = express.Router();

router.get("/", model(Task).getAll);
router.post("/", model(Task).postOne);
router.get("/:id", model(Task).getOne);
router.patch("/:id", model(Task).patchOne);
router.delete("/:id", model(Task).deleteOne);

module.exports = router;
