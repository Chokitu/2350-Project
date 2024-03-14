import React from 'react';
import './Background.css';
import bg from '../../assets/bg.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image1.png';
import image3 from '../../assets/image1.png';
import image4 from '../../assets/image1.png';
import image5 from '../../assets/image1.png';

const Home = () => {
  return (
    <div className="background">
      <div className="tv-frame">
        <img src={bg} className="image" alt="Background Logo" />
      </div>
      {/* Buttons */}
      <div className="buttons">
        <button>Home</button>
        <button>AI Basics</button>
        <button>I dont know</button>
      </div>
      {/* Learn More */}
      <div className="learn-more">
        <p>Learn More</p>
      </div>
      {/* Picture Buttons */}
      <div className="picture-buttons">
      <a href="/ai-basics" className="picture-button">
    <img src={image1} alt="Image 1" className="picture-button"/>
    <span className="overlay">AI Basics</span>
  </a>
        <img src={image2} alt="Image 2" className="picture-button" />
        <img src={image3} alt="Image 3" className="picture-button" />
        <img src={image4} alt="Image 4" className="picture-button" />
        <img src={image5} alt="Image 5" className="picture-button" />
      </div>
    </div>
  );
};


export default Home;
