import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <div className="section-dark">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Simple, transparent, and under your control.
        </p>

        <div className="process-flow">
          <div className="process-step">
            <div className="step-number">STEP 01</div>
            <span className="step-icon">📊</span>
            <h3 className="step-title">Market State Capture</h3>
            <p className="step-description">
              Caishen pulls real-time price, volume, order book depth, and
              volatility from Hyperliquid — building a state vector each tick.
            </p>
          </div>

          <div className="process-connector">
            <span className="connector-arrow">→</span>
          </div>

          <div className="process-step">
            <div className="step-number">STEP 02</div>
            <span className="step-icon">⚡</span>
            <h3 className="step-title">Neural Stimulation</h3>
            <p className="step-description">
              The Encoder maps the state vector to stimulation parameters —
              pulse frequency, amplitude, and channel selection — delivered
              directly to the CL1 electrode array.
            </p>
          </div>

          <div className="process-connector">
            <span className="connector-arrow">→</span>
          </div>

          <div className="process-step">
            <div className="step-number">STEP 03</div>
            <span className="step-icon">🧠</span>
            <h3 className="step-title">Biological Processing</h3>
            <p className="step-description">
              The neurons respond with spike trains — non-linear,
              history-dependent, and inherently adaptive. This is where
              the intelligence lives.
            </p>
          </div>

          <div className="process-connector">
            <span className="connector-arrow">→</span>
          </div>

          <div className="process-step">
            <div className="step-number">STEP 04</div>
            <span className="step-icon">📈</span>
            <h3 className="step-title">Trade Execution</h3>
            <p className="step-description">
              The Decoder reads the spike raster and outputs a trading action:
              buy, sell, or hold. Orders are placed on Hyperliquid in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
