import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';


import Model from './pages/Model.jsx';
import FullScreenNav from './components/common/navigation/FullscreenNav.jsx';
import Navbar from './components/common/navigation/Navbar.jsx';
import NavContext from './components/context/NavContext.jsx'; // default import

const App = () => {
  return (
    <NavContext>
      <div className="overflow-x-hidden">
         <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </NavContext>
  );
};

export default App;
