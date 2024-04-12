import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import mainWebBackground from "./images/Main-Hero-Background.webp";
import Cards from "./Cards";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src={mainWebBackground} alt="Hero Section" className="hero-section-image" />
      <div className="hero-text">
        <h1>Ai Learnt</h1>
        <hr></hr>
        <p>Unlocking AI secrets for everyone!</p>
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/ailearntsite"
        >
          Home
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/products"
        >
          Ai Basics
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/services"
        >
          Tools
        </Button>
      </div>
      
    </div>
  );
}

export default HeroSection;
