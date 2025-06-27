// src/components/GasRadarChart.jsx
import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    metric: "Global Warming Potential",
    CO2: 1,
    CH4: 25,
    N2O: 298,
    CFC: 10900,
  },
  {
    metric: "Atmospheric Lifetime",
    CO2: 100,
    CH4: 12,
    N2O: 114,
    CFC: 100,
  },
  {
    metric: "Contribution to Greenhouse Effect",
    CO2: 76,
    CH4: 16,
    N2O: 6,
    CFC: 2,
  },
];

const GasRadarChart = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-700 mb-4">📊 Gas Comparison (Radar Chart)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 300]} />
          <Radar name="CO₂" dataKey="CO2" stroke="#A0AEC0" fill="#A0AEC0" fillOpacity={0.5} />
          <Radar name="CH₄" dataKey="CH4" stroke="#48BB78" fill="#48BB78" fillOpacity={0.5} />
          <Radar name="N₂O" dataKey="N2O" stroke="#4299E1" fill="#4299E1" fillOpacity={0.5} />
          <Radar name="CFCs" dataKey="CFC" stroke="#9F7AEA" fill="#9F7AEA" fillOpacity={0.5} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GasRadarChart;
