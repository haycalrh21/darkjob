import React from 'react';



import Home from './pages/Home';
import Joki from './pages/Joki';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joki" element={<Joki />} />
      
      </Routes>
    </Router>
  );
};

export default App;