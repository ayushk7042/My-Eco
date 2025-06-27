import React, { useState } from "react";
import {
  LineChart,
  Line,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const EmissionGraph = ({ weeklyData, monthlyData, yearlyData }) => {
  const [view, setView] = useState("weekly");
  const [gas, setGas] = useState("CO2");

  const getData = () => {
    switch (view) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      case "yearly":
        return yearlyData;
      default:
        return weeklyData;
    }
  };

  const colors = {
    CO2: "#10B981",
    CH4: "#3B82F6",
    NO2: "#F59E0B"
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl mt-6">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <button
            onClick={() => setView("weekly")}
            className={`px-4 py-1 rounded-md ${view === "weekly" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView("monthly")}
            className={`px-4 py-1 rounded-md ${view === "monthly" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView("yearly")}
            className={`px-4 py-1 rounded-md ${view === "yearly" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Yearly
          </button>
        </div>
        <select
          onChange={(e) => setGas(e.target.value)}
          value={gas}
          className="border px-2 py-1 rounded-md"
        >
          <option value="CO2">CO₂</option>
          <option value="CH4">CH₄</option>
          <option value="NO2">NO₂</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={getData()}>
          <defs>
            <linearGradient id="colorGas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors[gas]} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colors[gas]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={gas}
            stroke={colors[gas]}
            fillOpacity={1}
            fill="url(#colorGas)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionGraph;
