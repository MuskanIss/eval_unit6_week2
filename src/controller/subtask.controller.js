const express = require("express");
const SubTask = require("../models/subtask.model");
const model = require("./item.controller");
let router = express.Router();

router.get("/", model(SubTask).getAll);
router.post("/", model(SubTask).postOne);
router.get("/:id", model(SubTask).getOne);
router.patch("/:id", model(SubTask).patchOne);
router.delete("/:id", model(SubTask).deleteOne);

module.exports = router;
