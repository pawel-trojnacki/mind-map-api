const express = require("express");
const { getMap } = require("../middlewares/getMap.middleware");
const {
  getOne,
  getAll,
  createOne,
  editOne,
  deleteOne,
} = require("../controllers/map.controller");

const mapRouter = express.Router();

mapRouter.get("/:id", getMap, getOne);

mapRouter.get("/", getAll);

mapRouter.post("/", createOne);

mapRouter.patch("/:id", getMap, editOne);

mapRouter.delete("/:id", getMap, deleteOne);

module.exports = { mapRouter };
