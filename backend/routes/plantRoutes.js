
const express = require("express");
const Plant = require("../models/Plant");

const router = express.Router();

// Create plant
router.post("/", async (req, res) => {
  try {
    const { name, category, description, image } = req.body;
    const plant = new Plant({ name, category, description, image });
    await plant.save();
    res.status(201).json(plant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all plants
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
