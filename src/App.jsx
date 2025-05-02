import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import HerbVerse from './HerbVerse'; // Correct import
import ComingSoon from './ar_vr';
import Credit from './credit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herbverse" element={<HerbVerse />} /> {/* This is the route for HerbVerse */}
        <Route path="/ar_vr" element={<ComingSoon/>} />
        <Route path="/credit" element={<Credit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
