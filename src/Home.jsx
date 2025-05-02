import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';

function Home() {
  return (
    <div>
      <h1>Welcome to the Herbal Garden Project</h1>

      <div className="button-container">
        {/* Make sure this points to /herbverse now */}
        <Link to="/herbverse">
          <button>HerbVerse</button>
        </Link>

        <Link to="/ar_vr">
          <button>AR/VR</button>
        </Link>

        <Link to="/credit">
          <button>Credits & Team Info</button>
        </Link>
      </div>
      

      <footer>
        <p>Powered By Third Year Computer Department Group 7</p>
      </footer>
    </div>
  );
}

export default Home;
