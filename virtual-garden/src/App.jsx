import React from 'react';
import PlantList from './components/plantlist';
import ChatAssistant from '../../src/components/ChatAssistance';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🌿 Virtual Garden 🌿</h1>
      <PlantList />
      <ChatAssistant /> {/* Add Chat Assistant */}
    </div>
  );
}

export default App;
