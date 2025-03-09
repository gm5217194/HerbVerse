import React, { useState, useRef } from "react";
import PlantCard from "../components/plantcard";
import PlantModal from "../components/PlantModal";
import "./plant.css";
const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description:
      "Aloe Vera is known for its medicinal properties and is great for skincare.",
    image: "https://m.media-amazon.com/images/I/61vM5XmrW2L.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description:
      "This plant improves indoor air quality and requires minimal care.",
    image: "https://m.media-amazon.com/images/I/51B16CszahL.jpg",
  },
  {
    id: 3,
    name: "Turmeric",
    scientificName: "urcuma longa",
    description:
      " A member of the ginger family, \n turmeric's active ingredient, curcumin, is used as a food seasoning and remedy. ",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327455/turmeric-root-and-powder.jpg",
  },
  {
    id: 4,
    name: "Coneflower",
    scientificName: "echinacea",
    description:
      " An herbal supplement that's used to treat respiratory tract infections, boost the immune system, and treat skin conditions",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9Qx59yZ1qjD5vOfmU5SKQiSRnOMiZYx8pqFMLxEzjPO4oV7&s",
  },
  {
    id: 5,
    name: "Toothpick plant",
    scientificName: "Ammi visnaga (L.) Lam.",
    description:"Fruits are used as mild stomachic and carminative in flatulent colic.",
    image: "https://thumbs.dreamstime.com/b/toothpick-bullwort-blutenball-seed-head-latin-name-ammi-visnaga-346753899.jpg",
  },
  {
    id: 6,
    name: "Jonkmari",
    scientificName: "Anagallis arvensis L.",
    description:
      " The constituent of the drug- Saatar is obtained from the leaves and stems are imported for medicinal use. The drug infusion is having diaphoretic, diuretic, stimulant, and stomachic properties and it is also given to subside premature labour pains..",
    image: "https://m.media-amazon.com/images/I/61rQf6bNPKL._AC_UF350,350_QL50_.jpg",
  },
  {
    id: 7,
    name: "Sataar",
    scientificName: "Zataria multiflora Boiss.",
    description:
      "  The constituent of the drug- Saatar is obtained from the leaves and stems are imported for medicinal use. The drug infusion is having diaphoretic, diuretic, stimulant, and stomachic properties and it is also given to subside premature labour pains.",
    image:
      "https://www.herbal-export.com/wp-content/uploads/2020/10/%D8%A2%D9%88%DB%8C%D8%B4%D9%86-%D8%B4%DB%8C%D8%B1%D8%A7%D8%B20-1-300x200.jpg",
  },
  {
    id: 8,
    name: "Budu, Pand",
    scientificName: "Viscum articulatum Burm",
    description:
      "It acts as febrifuge and paste is applied to cuts.",
    image:
      "https://www.researchgate.net/publication/346494517/figure/fig10/AS:963839088672770@1606808554229/Fig-14-Parasitic-benalu-Viscum-articulatum-Burmf-Viscum-articulatum-has-been-used.jpg",
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
