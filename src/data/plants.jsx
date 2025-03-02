import React, { useState, useRef } from "react";
import PlantCard from "../components/plantcard";
import PlantModal from "../components/PlantModal";
import './plant.css';
const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis miller",
      description: "Aloe Vera is known for its medicinal properties and is great for skincare.",
      image: "https://m.media-amazon.com/images/I/61vM5XmrW2L.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      description: "This plant improves indoor air quality and requires minimal care.",
      image: "https://m.media-amazon.com/images/I/51B16CszahL.jpg",
    },
    {
      id: 3,
      name: "Turmeric",
      scientificName: "urcuma longa",
      description: " A member of the ginger family, \n turmeric's active ingredient, curcumin, is used as a food seasoning and remedy. ",
      image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327455/turmeric-root-and-powder.jpg",
    },
    {
      id: 4,
      name: "Coneflower",
      scientificName: "echinacea",
      description: " An herbal supplement that's used to treat respiratory tract infections, boost the immune system, and treat skin conditions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9Qx59yZ1qjD5vOfmU5SKQiSRnOMiZYx8pqFMLxEzjPO4oV7&s",
    }
  ];
  
const PlantList = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleViewDetails = (plant) => {
    setSelectedPlant(plant);
  };
  return (
    <>
      <div className="plants-container">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name}</h3>
            {/* <p>{plant.scientificName}</p> */}
            <img src={plant.image} alt={plant.name} />
            <button onClick={() => setSelectedPlant(plant)}>View Details</button>
          </div>
        ))}
        {selectedPlant && <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
      </div>
    </>
  );
  
  // return (
  //   <div>
  //     {plants.map((plant) => (
  //       <PlantCard key={plant.id} plant={plant} onViewDetails={() => handleViewDetails(plant)} />
  //     ))}
  //     {selectedPlant && <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
  //   </div>
  // );
};

export default PlantList;
