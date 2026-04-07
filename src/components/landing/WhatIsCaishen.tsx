import React from "react";

const WhatIsCaishen: React.FC = () => {
  return (
    <div className="section-light" id="what-is-caishen">
      <div className="container">
        <h2 className="section-title">What Is Caishen?</h2>
        <p className="section-subtitle">
          Synthetic Biological Intelligence — real neurons making real trades.
        </p>

        <div className="what-is-grid">
          <div className="what-is-text">
            <h3>Trading powered by living neurons</h3>
            <p>
              Caishen bridges the gap between synthetic biological intelligence and
              financial markets. Using the same architecture as{" "}
              <code>doom-neuron-main</code>, we replace DOOM with Hyperliquid —
              letting real cultured neurons learn to trade.
            </p>
            <p>
              The neurons receive market state as electrical stimulation patterns
              (frequency, amplitude, channels) and respond with spike trains.
              A decoder maps these spikes to trading actions: buy, sell, hold.
              Profit and loss provide the reward signal for learning.
            </p>
            <p>
              The result: a trading system that adapts, learns, and evolves —
              powered entirely by biological computation.
            </p>
          </div>

          <div className="what-is-visual">
            <div className="neuron-card">
              <div className="neuron-card-icon green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="6"/>
                  <line x1="12" y1="18" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="6" y2="12"/>
                  <line x1="18" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <div>
                <h4>Live Neural Substrate</h4>
                <p>CL1 multi-electrode array with real cultured neurons — the compute layer.</p>
              </div>
            </div>

            <div className="neuron-card">
              <div className="neuron-card-icon cyan">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div>
                <h4>Market Signal Encoding</h4>
                <p>Price, volume, order book pressure — encoded to electrical stimulation.</p>
              </div>
            </div>

            <div className="neuron-card">
              <div className="neuron-card-icon red">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h4>Reward-Driven Learning</h4>
                <p>PNL feedback drives encoder weight updates via PPO-style policy gradients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCaishen;
