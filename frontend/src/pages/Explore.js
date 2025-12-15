import axios from "axios";
import { useEffect, useState } from "react";
import "./Explore.css";
import { useNavigate } from "react-router-dom";


export default function Explore() {
  const [plants, setPlants] = useState([]);
  const [category, setCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


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

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ RETURN MUST BE INSIDE THE FUNCTION
  return (
    <div className="explore-container">
      <div className="search-container">
  <input
    type="text"
    placeholder="Search plants by name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />
</div>


      <div className="filter-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Skincare")}>Skincare</button>
        <button onClick={() => setCategory("Haircare")}>Haircare</button>
        <button onClick={() => setCategory("Medicinal")}>Medicinal</button>
      </div>

      <div className="plant-grid">
        {filteredPlants.length > 0 ? (
  filteredPlants.map((plant) => (
    <div key={plant._id} className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>
        <strong>Category:</strong> {plant.category}
      </p>

      <button
  className="toggle-btn"
  onClick={() => navigate(`/plant/${plant._id}`)}
>
  View Description
</button>


      {expandedId === plant._id && <p>{plant.description}</p>}
    </div>
  ))
) : (
  <p className="no-results">No plants found 🌱</p>
)}

      </div>
    </div>
  );
}
