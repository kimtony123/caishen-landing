import React from "react";

const UserGroupsSection: React.FC = () => {
  return (
    <div className="section-dark">
      <div className="container">
        <h2 className="section-title">Built for Two Worlds</h2>
        <p className="section-subtitle">
          PermaClaw serves both biocomputer engineers and privacy‑conscious users.
        </p>

        <div className="user-groups">

        <div className="user-group-card">
            <div className="user-group-icon">💾</div>
            <h3>Users Seeking Permanent Memory</h3>
            <p>
              Your AI remembers everything – forever. Switch devices without losing context. All conversations are encrypted and stored on Arweave.
            </p>
            <ul className="user-group-features">
              <li>Cross‑device sync</li>
              <li>End‑to‑end encrypted</li>
              <li>No cloud lock‑in</li>
              <li>Recover with any wallet</li>
            </ul>
          </div>
          <div className="user-group-card">
            <div className="user-group-icon">🧬</div>
            <h3>Biocomputer Engineers</h3>
            <p>
              Stream live CL1 neuron spikes, stimulation events, and experimental data directly to your permanent AO process. Never lose expensive recordings again.
            </p>
            <ul className="user-group-features">
              <li>Real‑time spike ingestion</li>
              <li>Stimulation event logging</li>
              <li>Data replay & analysis</li>
              <li>Wallet‑recoverable experiments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGroupsSection;