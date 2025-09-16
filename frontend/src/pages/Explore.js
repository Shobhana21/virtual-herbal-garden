import axios from "axios";
import { useEffect, useState } from "react";
import "./Explore.css";

export default function Explore() {
  const [plants, setPlants] = useState([]);
  const [category, setCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        let url = "http://localhost:5000/api/plants";
        if (category !== "All") {
          url = `http://localhost:5000/api/plants/category/${category}`;
        }
        const response = await axios.get(url);
        setPlants(response.data);
      } catch (err) {
        console.error("Error fetching plants:", err);
      }
    };
    fetchPlants();
  }, [category]);

  return (
    <div className="explore-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Skincare")}>Skincare</button>
        <button onClick={() => setCategory("Haircare")}>Haircare</button>
        <button onClick={() => setCategory("Medicinal")}>Medicinal</button>
      </div>

      {/* Plant Cards */}
      <div className="plant-grid">
        {plants.map((plant) => (
          <div key={plant._id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>
              <strong>Category:</strong> {plant.category}
            </p>

            {/* Button to toggle description */}
            <button
              className="toggle-btn"
              onClick={() =>
                setExpandedId(expandedId === plant._id ? null : plant._id)
              }
            >
              {expandedId === plant._id ? "Hide Description" : "View Description"}
            </button>

            {/* Conditionally render description */}
            {expandedId === plant._id && <p>{plant.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
