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
          <li>Botanical Survey of India</li>
          <li>Ayurvedic & Herbal Research Papers</li>
        </ul>
      </div>

      <div className="credits-section">
        <h2>Team Members & Roles</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/mishrajeeeeee/"><strong>Gaurav Sunilkumar Mishra</strong></a> [Frontend Development & Database Integration]</li>
          <li><strong>Parth A. Patil</strong> [AI Chatbot Implementation]</li>
          <li><strong>Vaibhav Nemani</strong> [Research & Implemetation]</li>
          <li><strong>Padmashri Panda</strong> [Content Writing]</li>
        </ul>
      </div>

      <div className="credits-section">
        <h2>Tools & Technologies</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>BotPress(for AI Chatbot)</li>
          <li>VS Code, Power BI, Python</li>
        </ul>
      </div>

      <button className="back-button" onClick={handleBackClick}>⬅ Back to Home</button>
    </div>
  );
};

export default Credit;
