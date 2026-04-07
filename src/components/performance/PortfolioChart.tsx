import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { portfolioHistory } from "../../data/mockTradeData";
import { useTheme } from "../../services/ThemeProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PortfolioChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const labels = portfolioHistory.map((p) => {
    const d = new Date(p.date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const values = portfolioHistory.map((p) => p.value);

  const gridColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const tickColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)";

  const data = {
    labels,
    datasets: [
      {
        label: "Portfolio Value (USDC)",
        data: values,
        borderColor: "#00ff88",
        backgroundColor: "rgba(0, 255, 136, 0.08)",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#00ff88",
        pointBorderColor: isDark ? "#0a0a0a" : "#ffffff",
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? "#111" : "#fff",
        titleColor: "#00ff88",
        bodyColor: isDark ? "#e8e8e8" : "#1a1a1a",
        borderColor: "#00ff88",
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (ctx: any) =>
            `$${ctx.parsed.y.toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: gridColor },
        ticks: {
          color: tickColor,
          font: { family: "'JetBrains Mono', monospace", size: 10 },
        },
      },
      y: {
        grid: { color: gridColor },
        ticks: {
          color: tickColor,
          font: { family: "'JetBrains Mono', monospace", size: 10 },
          callback: (value: any) => `$${(value / 1000).toFixed(1)}k`,
        },
      },
    },
    interaction: { intersect: false, mode: "index" as const },
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Portfolio Value</h3>
          <p className="chart-subtitle">BTC/USDC — 30 day simulation</p>
        </div>
        <div className="chart-live-indicator">
          <span className="live-dot"></span>
          <span>LIVE</span>
        </div>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PortfolioChart;
