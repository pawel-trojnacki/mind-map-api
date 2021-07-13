const Map = require("../models/map.model");

const initialBoxes = (name) => [
    {
      identifier: "first",
      x: 220,
      y: 50,
      content: name,
      size: "xl",
      color: "white",
      backgroundColor: "blue",
      style: { bold: true, italic: false },
      notEditable: true,
      parent: null,
    },
  ];

const getOne = async (_, res) => {
  res.status(200).json({ map: res.map });
};

const getAll = async (_, res) => {
  try {
    const maps = await Map.find();
    res.status(200).json({ maps });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOne = async (req, res) => {
  const map = new Map({
    name: req.body.name,
    boxes: initialBoxes(),
  });

  try {
    const newMap = await map.save();
    res.status(201).json({ newMap });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const editOne = async (req, res) => {
  if (req.body.name) {
    res.map.name = req.body.name;
  }

  if (req.body.boxes) {
    res.map.boxes = req.body.boxes;
  }

  try {
    const updatedMap = await res.map.save();
    res.status(201).json({ message: "Map updated", updatedMap });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteOne = async (_, res) => {
  try {
    await res.map.remove();
    res.json({ message: "Map removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOne,
  getAll,
  createOne,
  editOne,
  deleteOne,
};
