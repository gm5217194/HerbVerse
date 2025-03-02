import React from "react";

const PlantCard = ({ plant, onViewDetails }) => {
  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2>{plant.name}</h2>
      <p>{plant.scientificName}</p>
      <img src={plant.image} alt={plant.name} style={{ width: "200px", height: "auto" }} />
      <br />
      <button onClick={onViewDetails}>View Details</button>
    </div>
  );
};

export default PlantCard;
