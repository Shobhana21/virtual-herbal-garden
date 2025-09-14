const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String, // skincare, haircare, medicinal, etc.
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // image URL for now
    default: "",
  },
});

module.exports = mongoose.model("Plant", plantSchema);