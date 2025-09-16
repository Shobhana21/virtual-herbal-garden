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
    category: "Skincare",
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
    image: "https://thumbs.dreamstime.com/b/bhringraj-flower-blooming-garden-bhringraj-bhringraj-also-known-as-kesharaj-which-means-ruler-hair-rich-336944061.jpg",
  },
  {
    name: "Shikakai",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/61rrG6P3ywL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Turmeric",
    category: "Medicinal",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Sandal wood",
    category: "Skincare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Vetiver",
    category: "Skincare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Amla",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Henna",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Hibiscus",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Rosemary",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Fenugreek",
    category: "Haircare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Moringa",
    category: "Medicinal",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Green Tea",
    category: "Skincare",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
  },{
    name: "Ashwagandha",
    category: "Medicinal",
    description: "Natural cleanser for healthy, shiny hair.",
    image: "https://m.media-amazon.com/images/I/91EKS8TNoHL._UF1000,1000_QL80_.jpg",
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
