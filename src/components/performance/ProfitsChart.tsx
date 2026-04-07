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

const ProfitsChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const labels = portfolioHistory.map((p) => {
    const d = new Date(p.date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const pnlValues = portfolioHistory.map((p) => p.pnl);

  const gridColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const tickColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)";

  const data = {
    labels,
    datasets: [
      {
        label: "Accumulated PnL (USDC)",
        data: pnlValues,
        borderColor: "#00d4ff",
        backgroundColor: (ctx: any) => {
          const chart = ctx.chart;
          const { ctx: canvasCtx, chartArea } = chart;
          if (!chartArea) return "rgba(0,212,255,0.08)";
          const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(0,212,255,0)");
          gradient.addColorStop(1, "rgba(0,212,255,0.2)");
          return gradient;
        },
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "#00d4ff",
        pointBorderColor: isDark ? "#0a0a0a" : "#ffffff",
        pointBorderWidth: 2,
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
        titleColor: "#00d4ff",
        bodyColor: isDark ? "#e8e8e8" : "#1a1a1a",
        borderColor: "#00d4ff",
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (ctx: any) => {
            const val = ctx.parsed.y;
            const sign = val >= 0 ? "+" : "";
            return `${sign}$${val.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
          },
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
          callback: (value: any) => {
            const sign = value >= 0 ? "+" : "";
            return `${sign}$${value.toLocaleString()}`;
          },
        },
      },
    },
    interaction: { intersect: false, mode: "index" as const },
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Accumulated Profits</h3>
          <p className="chart-subtitle">Realized + unrealized PnL over time</p>
        </div>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfitsChart;
