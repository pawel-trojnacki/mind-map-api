const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  boxes: {
    type: [
      {
        identifier: {
          type: String,
          required: true,
        },
        x: {
          type: Number,
          reqired: true,
        },
        y: {
          type: Number,
          reqired: true,
        },
        size: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        backgroundColor: {
          type: String,
          required: true,
        },
        style: {
          type: {
            bold: {
              type: Boolean,
              required: true,
            },
            italic: {
              type: Boolean,
              required: true,
            },
          },
          required: true,
        },
        notEditable: {
          type: Boolean,
        },
        parent: {
          type: String,
        },
      },
    ],
    required: true,
  },
});


module.exports = mongoose.model('Map', MapSchema);