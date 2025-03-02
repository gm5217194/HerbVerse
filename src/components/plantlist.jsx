// import React, { useState } from "react";
// import PlantCard from "./plantcard";
// import PlantModal from "./PlantModal";
// import plants from "../data/plants.jsx"; // Assuming plant data is in plant.js

// const PlantList = () => {
//   const [selectedPlant, setSelectedPlant] = useState(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//       {plants.map((plant) => (
//         <PlantCard key={plant.name} plant={plant} onViewDetails={setSelectedPlant} />
//       ))}

//       {selectedPlant && <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
//     </div>
//   );
// };

// export default PlantList;
