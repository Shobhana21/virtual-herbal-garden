import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/plants/${id}`
        );
        setPlant(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlant();
  }, [id]);

  if (!plant) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <img
        src={plant.image}
        alt={plant.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h1>{plant.name}</h1>
      <p><strong>Category:</strong> {plant.category}</p>
      <p>{plant.description}</p>
    </div>
  );
}
