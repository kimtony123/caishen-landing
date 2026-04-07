import React from "react";

const ArchitectureSection: React.FC = () => {
  return (
    <div className="section-light" id="architecture">
      <div className="container">
        <h2 className="section-title">Architecture</h2>
        <p className="section-subtitle">
          Adapted from doom-neuron-main — built for markets.
        </p>

        <div className="architecture-diagram">
          <div className="arch-section-label">
            &gt; signal_flow: ENCODER → NEURONS → DECODER → EXECUTION
          </div>

          <div className="arch-flow">
            <div className="arch-node">
              <div className="arch-node-icon hyperliquid">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="arch-node-label">Hyperliquid</div>
              <div className="arch-node-sublabel">Market Data</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <div className="arch-node-icon encoder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="9" y1="9" x2="15" y2="9"/>
                  <line x1="9" y1="12" x2="15" y2="12"/>
                  <line x1="9" y1="15" x2="12" y2="15"/>
                </svg>
              </div>
              <div className="arch-node-label">Encoder</div>
              <div className="arch-node-sublabel">State → Stim</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <div className="arch-node-icon neurons">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                  <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <div className="arch-node-label">CL1 Neurons</div>
              <div className="arch-node-sublabel">Biological</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <div className="arch-node-icon decoder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <div className="arch-node-label">Decoder</div>
              <div className="arch-node-sublabel">Spikes → Action</div>
            </div>

            <span className="arch-arrow">→</span>

            <div className="arch-node">
              <div className="arch-node-icon trade">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="arch-node-label">Hyperliquid</div>
              <div className="arch-node-sublabel">Trade Execution</div>
            </div>
          </div>

          <div className="arch-feedback-row">
            <span className="arch-feedback-label">↺ reward signal</span>
            <span className="arch-arrow" style={{color: 'var(--accent-red)', opacity: 0.5}}>←</span>
            <div className="arch-node">
              <div className="arch-node-icon trainer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className="arch-node-label">PPO Trainer</div>
              <div className="arch-node-sublabel">Update Encoder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSection;
