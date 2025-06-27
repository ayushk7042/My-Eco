// src/components/LiveClimateStats.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveClimateStats = () => {
  const [stats, setStats] = useState({
    co2: "Loading...",
    temp: "Loading...",
    seaLevel: "Loading..."
  });

  useEffect(() => {
    const fetchClimateData = async () => {
      try {
        // Example data (replace with real API if needed)
        const res = await axios.get("https://api.climateapi.dev/live"); // or your own endpoint
        const { co2_ppm, temperature_rise, sea_level_rise } = res.data;

        setStats({
          co2: `${co2_ppm} ppm`,
          temp: `${temperature_rise} °C`,
          seaLevel: `${sea_level_rise} mm`
        });
      } catch (error) {
        console.error("Error fetching live climate stats", error);
        setStats({
          co2: "Unavailable",
          temp: "Unavailable",
          seaLevel: "Unavailable"
        });
      }
    };

    fetchClimateData();
  }, []);

  return (
    <div className="bg-white mt-10 mx-6 shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌡️ Live Global Climate Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
        <div className="bg-green-50 rounded-md p-4 shadow-md">
          <p className="font-semibold text-gray-600">Global CO₂</p>
          <p className="text-2xl text-green-800">{stats.co2}</p>
        </div>
        <div className="bg-yellow-50 rounded-md p-4 shadow-md">
          <p className="font-semibold text-gray-600">Temperature Rise</p>
          <p className="text-2xl text-yellow-700">{stats.temp}</p>
        </div>
        <div className="bg-blue-50 rounded-md p-4 shadow-md">
          <p className="font-semibold text-gray-600">Sea Level Change</p>
          <p className="text-2xl text-blue-700">{stats.seaLevel}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveClimateStats;
