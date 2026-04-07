import React, { useState } from "react";
import { tradeHistory } from "../../data/mockTradeData";

type SortKey = "timestamp" | "direction" | "pnl" | "pnlPercent" | "status";

const TradeHistory: React.FC = () => {
  const [sortKey, setSortKey] = useState<SortKey>("timestamp");
  const [sortAsc, setSortAsc] = useState(false);
  const [filter, setFilter] = useState<"ALL" | "WIN" | "LOSS">("ALL");

  const sorted = [...tradeHistory]
    .filter((t) => filter === "ALL" || t.status === filter)
    .sort((a, b) => {
      let cmp = 0;
      if (sortKey === "timestamp") cmp = a.timestamp.localeCompare(b.timestamp);
      else if (sortKey === "pnl") cmp = a.pnl - b.pnl;
      else if (sortKey === "pnlPercent") cmp = a.pnlPercent - b.pnlPercent;
      else if (sortKey === "direction") cmp = a.direction.localeCompare(b.direction);
      else if (sortKey === "status") cmp = a.status.localeCompare(b.status);
      return sortAsc ? cmp : -cmp;
    });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const SortIcon = ({ active, asc }: { active: boolean; asc: boolean }) => (
    <span style={{ marginLeft: 4, opacity: active ? 1 : 0.3 }}>
      {active ? (asc ? "↑" : "↓") : "↕"}
    </span>
  );

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Trade History</h3>
          <p className="chart-subtitle">{tradeHistory.length} trades executed by CL1 neurons</p>
        </div>
        <div className="trade-filters">
          {(["ALL", "WIN", "LOSS"] as const).map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="table-wrapper">
        <table className="trade-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("timestamp")}>
                Time <SortIcon active={sortKey === "timestamp"} asc={sortAsc} />
              </th>
              <th>Asset</th>
              <th onClick={() => handleSort("direction")}>
                Direction <SortIcon active={sortKey === "direction"} asc={sortAsc} />
              </th>
              <th>Entry</th>
              <th>Exit</th>
              <th onClick={() => handleSort("pnl")}>
                PnL <SortIcon active={sortKey === "pnl"} asc={sortAsc} />
              </th>
              <th onClick={() => handleSort("pnlPercent")}>
                % <SortIcon active={sortKey === "pnlPercent"} asc={sortAsc} />
              </th>
              <th onClick={() => handleSort("status")}>
                Status <SortIcon active={sortKey === "status"} asc={sortAsc} />
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((trade) => (
              <tr key={trade.id} className={trade.status === "WIN" ? "row-win" : "row-loss"}>
                <td className="mono">{trade.timestamp}</td>
                <td className="mono asset-cell">{trade.asset}</td>
                <td>
                  <span className={`direction-badge ${trade.direction.toLowerCase()}`}>
                    {trade.direction}
                  </span>
                </td>
                <td className="mono">${trade.entryPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                <td className="mono">${trade.exitPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                <td className={`mono pnl-cell ${trade.pnl >= 0 ? "pnl-win" : "pnl-loss"}`}>
                  {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </td>
                <td className={`mono ${trade.pnlPercent >= 0 ? "pnl-win" : "pnl-loss"}`}>
                  {trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent.toFixed(2)}%
                </td>
                <td>
                  <span className={`status-badge ${trade.status.toLowerCase()}`}>
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
