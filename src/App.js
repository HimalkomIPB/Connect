import React from 'react';
import './App.css';
import Page from './features/Homepage/Page'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileHimalkom from './features/Profile/Profile Himalkom/ProfileHimalkom';
import Megaproker from './features/Megaproker/Megaproker'
import Ilkommunity from './features/Ilkommunity/Ilkommunity'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/ProfilHimalkom' element={<ProfileHimalkom />} />
          <Route path='/Megaproker' element={<Megaproker />} />
          <Route path='/Ilkommunity' element={<Ilkommunity />} />
          <Route path='/ProfilHimalkom' element={<ProfileHimalkom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
