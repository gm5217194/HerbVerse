import React from 'react';
import './credit.css';
import { useNavigate } from 'react-router-dom';

const Credit = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="credit-container">
      <h1>Credits & Team Contributions</h1>

      <div className="credits-section">
        <h2>Dataset and Research</h2>
        <ul>
          <li>AdventureWorks2014 - Primary dataset source</li>
          <li>Ayurvedic & Herbal Research Papers</li>
        </ul>
      </div>

      <div className="credits-section">
        <h2>Team Members & Roles</h2>
        <ul>
          <li><strong>Member 1 - Name:</strong> [Research & Content Writing]</li>
          <li><strong>Member 2 - Name:</strong> [Frontend Development]</li>
          <li><strong>Member 3 - Name:</strong> [Database Integration]</li>
          <li><strong>Member 4 - Name:</strong> [AI Chatbot Implementation]</li>
        </ul>
      </div>

      <div className="credits-section">
        <h2>Tools & Technologies</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>Gemini API (for AI Chatbot)</li>
          <li>SQLite & CSV for local data</li>
          <li>VS Code, Power BI, Python</li>
        </ul>
      </div>

      <button className="back-button" onClick={handleBackClick}>⬅ Back to Home</button>
    </div>
  );
};

export default Credit;
