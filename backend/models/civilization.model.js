const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const civilizationSchema = new Schema({
  image: {
    type: String,
    required: true,
    unique: true,
  },
  civilization: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  civdescription: {
    type: String,
    required: true,
  },
  leader: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  leaderdescription: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  unitdescription: {
    type: String,
    required: true,
  },
  infrastructure: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  infrastructuredescription: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Civilization = mongoose.model("Civilization", civilizationSchema);

module.exports = Civilization;
