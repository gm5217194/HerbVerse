import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlantList from './data/plants.jsx'; // Adjust the path based on your folder structure
import FloatingChat from './components/FloatingChat.jsx';
import './HerbVerse.css';

function HerbVerse() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="app">
      <h1>🌿HerbVerse🌿</h1>
      
      <PlantList /> {/* This will render all plant cards */}

      <button className="back-button" onClick={handleBackClick}>
        ⬅ Back to Home
      </button>
    </div>
  );
}

export default HerbVerse;
