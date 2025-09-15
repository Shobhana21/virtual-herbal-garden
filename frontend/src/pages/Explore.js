import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      {/* Filter Buttons */}
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Skincare")}>Skincare</button>
      <button onClick={() => setCategory("Haircare")}>Haircare</button>
      <button onClick={() => setCategory("Medicinal")}>Medicinal</button>

      {/* Plant Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
        {plants.map((plant) => (
          <div
  key={plant._id}
  style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
  }}
>
  <img
    src={plant.image}
    alt={plant.name}
    style={{ width: "100%", height: "200px", objectFit: "cover" }}
  />
  <h3>{plant.name}</h3>
  <p><strong>Category:</strong> {plant.category}</p>

  {/* Button to toggle description */}
  <button
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
