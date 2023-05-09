import React from 'react';
import './App.css';
import Page from './features/Homepage/Page'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileHimalkom from './features/Profile/Profile Himalkom/ProfileHimalkom';
import Megaproker from './features/Megaproker/Megaproker'
import Komnews from './features/Komnews/Komnews'
import Ilkommunity from './features/Ilkommunity/Ilkommunity'
import Placeholder from './features/Placeholder/Placeholder';
import BP from './features/Profile/Profile Divisi/BP/BP';
import BPH from './features/Profile/Profile Divisi/BPH/BPH'
import Edukasi from './features/Profile/Profile Divisi/Edukasi/Edukasi';
import Eksternal from './features/Profile/Profile Divisi/Eksternal/Eksternal';
import HRD from './features/Profile/Profile Divisi/HRD/HRD';
import Internal from './features/Profile/Profile Divisi/Internal/Internal';
import Medbrand from './features/Profile/Profile Divisi/Medbrand/Medbrand';
import Ristek from './features/Profile/Profile Divisi/Ristek/Ristek';
import Entrepreneur from './features/Profile/Profile Divisi/Entrepreneur/Entrepreneur';
import Riset from './features/Riset/Riset';
import Csi from './features/Ilkommunity/CSI/Csi';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Page />} />
          {/* <Route path='/Placeholder' element={<Placeholder />} /> */}
          <Route path='/ProfilHimalkom' element={<ProfileHimalkom />} />
          <Route path='/Komnews' element={<Komnews />} />
          <Route path='/Megaproker' element={<Megaproker />} />
          <Route path='/Ilkommunity' element={<Ilkommunity />} />
            <Route path='/Badan-Pengawas' element={<BP />} />
            <Route path='/BPH' element={<BPH />} />
            <Route path='/Edukasi' element={<Edukasi />} />
            <Route path='/Eksternal' element={<Eksternal />} />
            <Route path='/HRD' element={<HRD />} />
            <Route path='/Internal' element={<Internal />} />
            <Route path='/Media-Branding' element={<Medbrand />} />
            <Route path='/Riset-Teknologi' element={<Ristek />} />
            <Route path='/Entrepreneur' element={<Entrepreneur />} />
          <Route path='/Riset-Himalkom' element={<Riset />} />
          <Route path='/CSI' element={<Csi />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
