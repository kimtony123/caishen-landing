import React from "react";
import NavigationButton from "../NavigationsButton";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section-text">
      <div className="hero-section-overlay"></div>
      <div className="hero-section-content">
        <div className="hero-badge">
          <span className="blink-cursor">_</span> BIOLOGICAL TRADING ENGINE
        </div>

        <h1 className="hero-title">
          Living Neurons.<br />
          <span className="highlight-green">Real Markets.</span><br />
          <span className="highlight-red">Real Profits.</span>
        </h1>

        <p className="hero-description">
          Caishen connects real biological neurons to Hyperliquid markets.
          The neurons learn to trade. You profit from biology.
        </p>

        <div className="hero-actions">
          <NavigationButton
            path="/performance"
            variant="premium"
            style={{
              fontSize: '1.05rem',
              padding: '0.9rem 2.2rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            View Live Performance
          </NavigationButton>

          <a href="#what-is-caishen" className="hero-btn">
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </div>

        <p className="hero-note">
          &gt; neurons.trade("BTC/USDC") — trading in progress...
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
