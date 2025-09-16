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
    image: "https://www.lotus.in/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg?v=1712987991",
  },
  {
    name: "Neem",
    category: "Haircare",
    description: "Known for antibacterial properties, great for acne.",
    image: "https://t4.ftcdn.net/jpg/06/66/22/45/360_F_666224592_nId6bSdaOgx8yjgEvokpP791NG5WYXw3.jpg",
  },
  {
    name: "Tulsi",
    category: "Medicinal",
    description: "Boosts immunity and relieves stress.",
    image: "https://www.ugaoo.com/cdn/shop/articles/561da47a50.jpg?v=1729499689",
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
