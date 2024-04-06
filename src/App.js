import React, { useState, useEffect } from 'react';
import WelcomeBox from './WelcomeBox';
import InformationBox from './InformationBox';
import WorldWar2 from './WorldWar2';
import FeedBackWar from "./FeedBackWar";
import PaperWritingGame from './PaperWritingGame';
import PaperFeedback from './PaperFeedback'; 
import WriteOwn from './WriteOwn';
import GrammarGame from './Grammar'; // Import the GrammarGame component
import End from './End';
import './App.css'
import Home from './Components//Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [phase, setPhase] = useState(0); // 0 for initial phase
  const [response, setResponse] = useState(""); // State to store the AI response
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  useEffect(() => {
    // Load language preference from storage if available
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleNext = () => {
    setPhase(phase + 1);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language); // Store language preference in localStorage
  };


  return (
    <div className="app-container">
      <div className="inner-box">
      <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
        {phase === 0 && <WelcomeBox onNext={handleNext} onLanguageChange={handleLanguageChange} />}
        {phase === 1 && <InformationBox onNext={handleNext} selectedLanguage={selectedLanguage} />}
        {phase === 2 && <WorldWar2 onNext={handleNext} selectedLanguage={selectedLanguage} />}
        {phase === 3 && <FeedBackWar onNext={handleNext} selectedLanguage={selectedLanguage} />} 
        {phase === 4 && <PaperWritingGame onNext={handleNext} selectedLanguage={selectedLanguage} />}
        {phase === 5 && <PaperFeedback onNext={handleNext} selectedLanguage={selectedLanguage} />} 
        {phase === 6 && <WriteOwn onNext={handleNext} selectedLanguage={selectedLanguage}/>}
        {phase === 7 && <GrammarGame onNext={handleNext} setResponse={setResponse} selectedLanguage={selectedLanguage} />} {/* Pass setResponse to GrammarGame */}
        {phase === 8 && <End response={response} selectedLanguage={selectedLanguage} />} {/* Pass response to End component */}
      </div>
      <div class="footer">

      </div>
    </div>
  );
};

export default App;
