import React from 'react';
import PlantList from './data/plants.jsx'; // Adjust the path based on your folder structure
import FloatingChat from './components/FloatingChat.jsx';
import './HerbVerse.css';

function HerbVerse() {
  return (
    <div className="app">
      <h1>🌿HerbVerse🌿</h1>
      <h3>The Major update will be rolled out with Home page, Better chat bot,
        more plants and main thing the overall UI/UX will be refreshed with indroduction of Credits and Detsils, pls co-operate </h3>
      <PlantList /> {/* This will render all plant cards */}
      
    </div>
  );
}

export default HerbVerse;
