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
    model:
      "https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?ui_theme=dark",
  },
  {
    id: 2,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description:
      "This plant improves indoor air quality and requires minimal care.",
    image: "https://m.media-amazon.com/images/I/51B16CszahL.jpg",
    model:
      "https://sketchfab.com/models/1a3dc33b7dbc4310a0927a5eceb1d615/embed",
  },
  {
    id: 3,
    name: "Borage",
    scientificName: "Borago officinalis",
    description:
      "Borage is an herb with vibrant blue, star-shaped flowers and hairy leaves. It’s often grown for its beauty and edible parts",
    image:
      "https://www.allthatgrows.in/cdn/shop/products/BorageSeeds_isolated_600x600px.jpg?v=1642745400",
    model:
      "https://sketchfab.com/models/48ae0b79d67548d0b19d27f26faef544/embed",
  },
  {
    id: 4,
    name: "Coneflower",
    scientificName: "echinacea",
    description:
      " An herbal supplement that's used to treat respiratory tract infections, boost the immune system, and treat skin conditions",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9Qx59yZ1qjD5vOfmU5SKQiSRnOMiZYx8pqFMLxEzjPO4oV7&s",
    model:
      "https://sketchfab.com/models/2e37c9a50e4a45e096f3fcc1e688a6eb/embed",
  },
  {
    id: 5,
    name: "HouseSleek Plant",
    scientificName: "Sempervivum",
    description:
      "Low-maintenance succulent known for its rosette-shaped leaves and ability to thrive in tough conditions",
    image:
      "https://www.plant-lore.com/wp-content/uploads/2010/10/P1070543-scaled.jpg",
    model:
      "https://sketchfab.com/models/70679a304b324ca8941c214875acf6a9/embed",
  },
  {
    id: 6,
    name: "Swiss Cheese Plant",
    scientificName: "Monstera deliciosa",
    description:
      "It is a tropical beauty with large, split leaves. Popular as an indoor plant, it thrives in bright, indirect light and adds a lush, jungle vibe to any space.",
    image:
      "https://www.seasol.com.au/wp-content/uploads/2021/11/iStock-1186420104-scaled.jpg",
    model:
      "https://sketchfab.com/models/1f4f3d477f8e4a37a04efbcf173938a3/embed",
  },
  {
    id: 7,
    name: "Dumb Cane",
    scientificName: "Dieffenbachia ",
    description:
      "It is a popular houseplant with broad, variegated leaves. While beautiful, it's toxic if ingested—causing irritation, swelling of the mouth and throat, and difficulty speaking",
    image:
      "https://www.planetnatural.com/wp-content/uploads/2023/09/Dieffenbachia-seguine-leaves.jpg",
    model:
      "https://sketchfab.com/models/9cf12658f38341d38843278d634d45c5/embed",
  },
  {
    id: 8,
    name: "Mint",
    scientificName: "Mentha spp",
    description:
      "Mint is a fast-growing, aromatic herb with bright green leaves and a refreshing scent. Commonly used in teas, cuisines, and natural remedies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTdFDBjQHaHTs-L0a9YT55CSaYHGqs9hchA&s",
    model:
      "https://sketchfab.com/models/0125d1162680403aa0c57c491380615b/embed",
  },
  {
    id: 9,
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description:
      "Aloe Vera is known for its medicinal properties and is great for skincare.",
    image: "https://m.media-amazon.com/images/I/61vM5XmrW2L.jpg",
    model:
      "https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?ui_theme=dark",
  },
  {
    id: 10,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description:
      "This plant improves indoor air quality and requires minimal care.",
    image: "https://m.media-amazon.com/images/I/51B16CszahL.jpg",
    model:
      "https://sketchfab.com/models/1a3dc33b7dbc4310a0927a5eceb1d615/embed",
  },
  {
    id: 11,
    name: "Borage",
    scientificName: "Borago officinalis",
    description:
      "Borage is an herb with vibrant blue, star-shaped flowers and hairy leaves. It’s often grown for its beauty and edible parts",
    image:
      "https://www.allthatgrows.in/cdn/shop/products/BorageSeeds_isolated_600x600px.jpg?v=1642745400",
    model:
      "https://sketchfab.com/models/48ae0b79d67548d0b19d27f26faef544/embed",
  },
  {
    id: 12,
    name: "Coneflower",
    scientificName: "echinacea",
    description:
      " An herbal supplement that's used to treat respiratory tract infections, boost the immune system, and treat skin conditions",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9Qx59yZ1qjD5vOfmU5SKQiSRnOMiZYx8pqFMLxEzjPO4oV7&s",
    model:
      "https://sketchfab.com/models/2e37c9a50e4a45e096f3fcc1e688a6eb/embed",
  },
  {
    id: 13,
    name: "HouseSleek Plant",
    scientificName: "Sempervivum",
    description:
      "Low-maintenance succulent known for its rosette-shaped leaves and ability to thrive in tough conditions",
    image:
      "https://www.plant-lore.com/wp-content/uploads/2010/10/P1070543-scaled.jpg",
    model:
      "https://sketchfab.com/models/70679a304b324ca8941c214875acf6a9/embed",
  },
  {
    id: 14,
    name: "Swiss Cheese Plant",
    scientificName: "Monstera deliciosa",
    description:
      "It is a tropical beauty with large, split leaves. Popular as an indoor plant, it thrives in bright, indirect light and adds a lush, jungle vibe to any space.",
    image:
      "https://www.seasol.com.au/wp-content/uploads/2021/11/iStock-1186420104-scaled.jpg",
    model:
      "https://sketchfab.com/models/1f4f3d477f8e4a37a04efbcf173938a3/embed",
  },
  {
    id: 15,
    name: "Dumb Cane",
    scientificName: "Dieffenbachia ",
    description:
      "It is a popular houseplant with broad, variegated leaves. While beautiful, it's toxic if ingested—causing irritation, swelling of the mouth and throat, and difficulty speaking",
    image:
      "https://www.planetnatural.com/wp-content/uploads/2023/09/Dieffenbachia-seguine-leaves.jpg",
    model:
      "https://sketchfab.com/models/9cf12658f38341d38843278d634d45c5/embed",
  },
  {
    id: 16,
    name: "Mint",
    scientificName: "Mentha spp",
    description:
      "Mint is a fast-growing, aromatic herb with bright green leaves and a refreshing scent. Commonly used in teas, cuisines, and natural remedies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTdFDBjQHaHTs-L0a9YT55CSaYHGqs9hchA&s",
    model:
      "https://sketchfab.com/models/0125d1162680403aa0c57c491380615b/embed",
  },
];

const PlantList = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const detailsRef = useRef(null);
  const handleViewDetails = (plant) => {
    setSelectedPlant(plant);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <div className="plants-container">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name}</h3>
            <img src={plant.image} alt={plant.name} />
            <button onClick={() => handleViewDetails(plant)}>
              View Details
            </button>
          </div>
        ))}
        {selectedPlant && (
          <div ref={detailsRef}>
          <PlantModal
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
          />
         </div>        
        )}
      </div>
    </>
  );
};
export default PlantList;
