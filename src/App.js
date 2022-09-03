import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Page Imports
import AboutUs from "./Pages/AboutUs/AboutUs";
import Stakeverse from "./Pages/Stakeverse/Stakeverse";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/stakeverse" element={<Stakeverse />} />
      </Routes>
    </Router>
  );
};

export default App;
