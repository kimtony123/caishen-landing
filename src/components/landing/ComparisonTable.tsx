import React from "react";

const ComparisonTable: React.FC = () => {
  return (
    <div className="section-light">
      <div className="container">
        <h2 className="section-title">Why PermaClaw?</h2>
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-column">Feature</th>
                <th className="plan-column">Traditional AI</th>
                <th className="plan-column featured">PermaClaw</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Memory Persistence</td>
                <td>Ephemeral / Local only</td>
                <td>Permanent on AO</td>
              </tr>
              <tr>
                <td>Recovery after device loss</td>
                <td>Lost forever</td>
                <td>Recover with wallet</td>
              </tr>
              <tr>
                <td>Biocomputing data storage</td>
                <td>Local files (risk of loss)</td>
                <td>Streamed to permanent process</td>
              </tr>
              <tr>
                <td>Cloud dependency</td>
                <td>Often required</td>
                <td>Self‑hostable, no cloud</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>Monthly subscriptions</td>
                <td>One‑time wallet gas</td>
              </tr>
              <tr>
                <td>App store</td>
                <td>Proprietary</td>
                <td>Decentralized aoStore</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;