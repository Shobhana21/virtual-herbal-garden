// 
import axios from "axios";
import { useEffect, useState } from "react";

export default function Explore() {
  const [plants, setPlants] = useState([]);
  const [category, setCategory] = useState("All");

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
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Skincare")}>Skincare</button>
      <button onClick={() => setCategory("Haircare")}>Haircare</button>
      <button onClick={() => setCategory("Medicinal")}>Medicinal</button>

      <div>
        {plants.map((plant) => (
          <div key={plant._id}>
            <h3>{plant.name}</h3>
            <p>{plant.category}</p>
            <img src={plant.image} alt={plant.name} width="150" />
          </div>
        ))}
      </div>
    </div>
  );
}
