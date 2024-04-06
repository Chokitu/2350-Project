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
import './game.css';

function Game() {


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
    <>
<div className="app-container">
  <div className='inner'>
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
    </div>

    </>
  );
}

export default Game;
