import React, { useState, useRef } from "react";
import PlantCard from "../components/plantcard";
import PlantModal from "../components/PlantModal";
import "./plant.css";
import Model3D from "../components/3d_model";
const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description:
      "Aloe Vera is known for its medicinal properties and is great for skincare.",
    image: "https://m.media-amazon.com/images/I/61vM5XmrW2L.jpg",
    model:"https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?ui_theme=dark",
  },
  {
    id: 2,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description:
      "This plant improves indoor air quality and requires minimal care.",
    image: "https://m.media-amazon.com/images/I/51B16CszahL.jpg",
    model: "https://sketchfab.com/models/1a3dc33b7dbc4310a0927a5eceb1d615/embed"
  },
  {
    id: 3,
    name: "Turmeric",
    scientificName: "urcuma longa",
    description:
      " A member of the ginger family, \n turmeric's active ingredient, curcumin, is used as a food seasoning and remedy. ",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327455/turmeric-root-and-powder.jpg",
      model: "https://sketchfab.com/models/05f6febc74134387901d7bb5aa8d2ffb/embed"
  },
  {
    id: 4,
    name: "Coneflower",
    scientificName: "echinacea",
    description:
      " An herbal supplement that's used to treat respiratory tract infections, boost the immune system, and treat skin conditions",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9Qx59yZ1qjD5vOfmU5SKQiSRnOMiZYx8pqFMLxEzjPO4oV7&s",
      model: "https://sketchfab.com/models/2e37c9a50e4a45e096f3fcc1e688a6eb/embed"
  },
  {
    id: 5,
    name: "HouseSleek Plant",
    scientificName: "Sempervivum",
    description:"Low-maintenance succulent known for its rosette-shaped leaves and ability to thrive in tough conditions",
    image: "https://www.plant-lore.com/wp-content/uploads/2010/10/P1070543-scaled.jpg",
    model: "https://sketchfab.com/models/70679a304b324ca8941c214875acf6a9/embed"
  },
  {
    id: 6,
    name: "Swiss Cheese Plant",
    scientificName: "Monstera deliciosa",
    description:
      "It is a tropical beauty with large, split leaves. Popular as an indoor plant, it thrives in bright, indirect light and adds a lush, jungle vibe to any space.",
    image: "https://www.seasol.com.au/wp-content/uploads/2021/11/iStock-1186420104-scaled.jpg",
    model: "https://sketchfab.com/models/1f4f3d477f8e4a37a04efbcf173938a3/embed"
  },
  {
    id: 7,
    name: "Dumb Cane",
    scientificName: "Dieffenbachia ",
    description:
      "It is a popular houseplant with broad, variegated leaves. While beautiful, it's toxic if ingested—causing irritation, swelling of the mouth and throat, and difficulty speaking",
    image:
      "https://www.planetnatural.com/wp-content/uploads/2023/09/Dieffenbachia-seguine-leaves.jpg",
      model: "https://sketchfab.com/models/9cf12658f38341d38843278d634d45c5/embed"
  },
  {
    id: 8,
    name: "Budu, Pand",
    scientificName: "Mentha spp",
    description:
      "Mint is a fast-growing, aromatic herb with bright green leaves and a refreshing scent. Commonly used in teas, cuisines, and natural remedies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTdFDBjQHaHTs-L0a9YT55CSaYHGqs9hchA&s",
      model: "https://sketchfab.com/models/0125d1162680403aa0c57c491380615b/embed"
  },
];

const PlantList = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleViewDetails = (plant) => {
    setSelectedPlant(plant);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  };
  return (
    <>
      <div className="plants-container">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name}</h3>
            {/* <p>{plant.scientificName}</p> */}
            <img src={plant.image} alt={plant.name} />
            <button onClick={() => handleViewDetails(plant)}>
              View Details
            </button>
          </div>
        ))}
        {selectedPlant && (
          <PlantModal
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
          />
        )}
      </div>
    </>
  );
};
// return (
//   <div>
//     {plants.map((plant) => (
//       <PlantCard key={plant.id} plant={plant} onViewDetails={() => handleViewDetails(plant)} />
//     ))}
//     {selectedPlant && <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
//   </div>
// );
// // import { useRef } from "react";

// const PlantList = () => {
//   const [selectedPlant, setSelectedPlant] = useState(null);
//   const detailsRef = useRef(null); // Reference for auto-scroll

//   const handleViewDetails = (plant) => {
//     setSelectedPlant(plant);

//     // Auto-scroll smoothly to modal
// setTimeout(() => {
//   detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
// }, 300);
//   };

//   return (
//     <div className="plants-container">
//       {plants.map((plant) => (
//         <div key={plant.id} className="plant-card">
//           <h3>{plant.name}</h3>
//           <img src={plant.image} alt={plant.name} />
//           <button onClick={() => handleViewDetails(plant)}>View Details</button>
//         </div>
//       ))}

// <div ref={detailsRef}>
//   {selectedPlant && <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
// </div>
//     </div>
//   );
// };

export default PlantList;
