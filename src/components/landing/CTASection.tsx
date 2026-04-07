import React from "react";
import NavigationButton from "../NavigationsButton";

const CTASection: React.FC = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <h2 className="cta-title">Let the neurons trade.</h2>
        <p className="cta-description">
          Watch live trading performance powered by synthetic biological intelligence.
          Real neurons. Real markets. Real results.
        </p>
        <div className="cta-actions">
          <NavigationButton
            path="/performance"
            variant="premium"
            style={{
              fontSize: '1.1rem',
              padding: '1rem 2.5rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            View Live Performance
          </NavigationButton>
          <div className="cta-links">
            <a href="https://github.com/kimtony123/caishen-landing" className="cta-link" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
            <a href="#architecture" className="cta-link">
              Architecture →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
