import React from "react";
import HeroScene from "./HeroScene";
import "./NeuralHero.css";

const NeuralHero: React.FC = () => {
  return (
    <div className="neural-hero-section">
      <div className="neural-hero-canvas">
        <HeroScene />
      </div>
      <div className="neural-hero-scanlines"></div>
    </div>
  );
};

export default NeuralHero;
