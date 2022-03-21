const express = require("express");
const Task = require("../models/task.model");
const SubTask = require("../models/subtask.model");

// let router = express.Router();

const getAll = (model) => async (req, res) => {
  console.log("vd");
  if (model === Task) {
    const { pageNum = 1, pageSize = 3 } = req.query;
    const offset = (pageNum - 1) * pageSize;
    var x = await model
      .find()
      .skip(offset)
      .limit(pageSize)
      .populate("subtasks")
      .exec();
    let totalPages = Math.ceil((await Task.find().countDocuments()) / pageSize);
    res.status(200).json({ tasks: x, pages: totalPages, curPage: pageNum });
  } else {
    var x = await model.find();
    console.log(x);
    res.status(200).json(x);
  }
};
const postOne = (model) => async (req, res) => {
  var x1 = await model.create(req.body);
  console.log(req.body.subtasks);
  res.status(200).json(x1);
};
const getOne = (model) => async (req, res) => {
  var x = await model.findById(req.params.id).populate("subtasks");
  res.status(200).json(x);
};
const patchOne = (model) => async (req, res) => {
  if (model === Task) {
    var x = await model.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          status: req.body.status,
        },
        $push: { subtasks: [...req.body.subtasks] },
      },
      { new: true }
    );
  } else {
    var x = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  }
  res.status(200).json(x);
};
const deleteOne = (model) => async (req, res) => {
  var x = await model.findByIdAndDelete(req.params.id);
  res.status(200).json(x);
};

module.exports = (model) => ({
  getAll: getAll(model),
  getOne: getOne(model),
  postOne: postOne(model),
  deleteOne: deleteOne(model),
  patchOne: patchOne(model),
});
