import React, { useState } from "react";
import "./plantmodal.css";
import Model3D from "./3d_model"; // Import the 3D model component

const PlantModal = ({ plant, onClose }) => {
  const [show3DModel, setShow3DModel] = useState(false); // State for toggling 3D model

  if (!plant) return null;

  return (
    <div className="DetailedContainer">
      <div className="DetailedContainerData">
        <h2 className="text-xl font-bold">{plant.name}</h2>
        <p className="italic">{plant.scientificName}</p>
        <p className="mt-2">{plant.description}</p>
        {!show3DModel ? (
          <img src={plant.image} alt={plant.name} className="DetailedContainerImage" />
        ) : (
          <Model3D modelUrl={plant.model} />
        )}

        <button className="CloseButton" onClick={onClose}>
          Close
        </button>

        <button className="Modal" onClick={() => setShow3DModel(!show3DModel)}>
          {show3DModel ? "Hide 3D Model" : "View 3D Model"}
        </button>
      </div>
    </div>
  );
};

export default PlantModal;
