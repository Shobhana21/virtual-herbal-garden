// backend/seed/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Plant from "../models/Plant.js";

dotenv.config();

const plants = [
  {
    name: "Aloe Vera",
    category: "Skincare",
    description: "Used for skin soothing and healing burns.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Aloe_vera_flower.JPG",
  },
  {
    name: "Neem",
    category: "Haircare",
    description: "Known for antibacterial properties, great for acne.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Neem_tree_leaves.jpg",
  },
  {
    name: "Tulsi",
    category: "Medicinal",
    description: "Boosts immunity and relieves stress.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Tulsi_leaves.jpg",
  },
  {
    name: "Bhringraj",
    category: "Haircare",
    description: "Promotes hair growth and prevents dandruff.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Eclipta_alba_flower.jpg",
  },
  {
    name: "Shikakai",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Shikakai_fruit.jpg",
  },
  {
    name: "Shikakai",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Shikakai_fruit.jpg",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Plant.deleteMany(); // clears old data
    await Plant.insertMany(plants);
    console.log("✅ Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
