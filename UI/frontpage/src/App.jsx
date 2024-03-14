import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"; // Adjusted import path for Home.jsx
import AiBasics from "./Components/AiBasics/AiBasics"; // Import your AiBasics component
import Contact from "./Components/Contacts/Contacts"; // Import your Contact component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-basics" element={<AiBasics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
