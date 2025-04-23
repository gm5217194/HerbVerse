import React from 'react';
import PlantList from './data/plants.jsx'; // Adjust the path based on your folder structure
import FloatingChat from './components/FloatingChat';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🌿HerbVerse🌿</h1>
      <PlantList /> {/* This will render all plant cards */}
      <FloatingChat />
    </div>
  );
}

export default App;
