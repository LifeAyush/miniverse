import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Page Imports
import AboutUs from "./Pages/AboutUs/AboutUs";
import Stakeverse from "./Pages/Stakeverse/Stakeverse";
import MiniMarket from "./Pages/MiniMarket/MiniMarket"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/stakeverse" element={<Stakeverse />} />
        <Route path="/minimarket" element={<MiniMarket />} />
      </Routes>
    </Router>
  );
};

export default App;
