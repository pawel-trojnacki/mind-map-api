const Map = require("../models/map.model");

const getMap = async (req, res, next) => {
  let map = null;

  try {
    map = await Map.findById(req.params.id);
    if (!map) {
      return res.status(404).json({ message: "Map not found" });
    }
  } catch (err) {
    return res.status(404).json({ message: "Map not found" });
  }

  res.map = map;

  next();
};

module.exports = { getMap };
