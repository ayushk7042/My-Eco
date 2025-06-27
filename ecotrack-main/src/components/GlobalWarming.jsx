import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend
} from "recharts";
import YouTube from "react-youtube";
import worldMapImg from "../assets/world-impact-map.png"; // Use any map image or globe component
import glacierBefore from "../assets/glacier-before.jpg";
import glacierAfter from "../assets/glacier-after.jpg";

const GlobalWarming = () => {
  const [tempData, setTempData] = useState([]);
  const [emissionData, setEmissionData] = useState([]);

  useEffect(() => {
    // Example data; replace with real API later
    setTempData([
      { year: 1880, temp: 0 }, { year: 1920, temp: 0.2 },
      { year: 1960, temp: 0.3 }, { year: 1980, temp: 0.6 },
      { year: 2000, temp: 0.9 }, { year: 2020, temp: 1.2 }
    ]);

    setEmissionData([
      { country: "China", total: 10000, perCapita: 7.1 },
      { country: "USA", total: 5000, perCapita: 15.5 },
      { country: "India", total: 3000, perCapita: 2.5 },
      { country: "Russia", total: 1500, perCapita: 11.2 }
    ]);
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌍 Global Warming Impact</h1>

      {/* 🔥 1. Temperature Rise Timeline */}
      <div className="bg-gray-100 p-6 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">🔥 Temperature Rise Since 1880</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tempData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "°C Rise", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#EF4444" strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🧊 2. Melting Glaciers Animation */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">🧊 Melting Glaciers</h2>
          <p className="text-gray-600">Himalayan glaciers have shrunk by 40% in 50 years.</p>
          <div className="flex justify-between mt-4">
            <img src={glacierBefore} alt="Glacier Before" className="w-[48%] rounded shadow" />
            <img src={glacierAfter} alt="Glacier After" className="w-[48%] rounded shadow" />
          </div>
        </div>

        {/* 📽️ 5. Short Documentary Clips */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">📽️ Awareness Video</h2>
          <YouTube videoId="EtW2rrLHs08" opts={{ height: "230", width: "100%" }} />
          <p className="text-gray-600 mt-2">A 2-min clip explaining causes of global warming.</p>
        </div>
      </div>

      {/* 🗺️ 3. World Map of Impact */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4">🗺️ Global Climate Impact Map</h2>
        <img src={worldMapImg} alt="Climate Impact Zones" className="w-full rounded-lg shadow" />
        <p className="text-sm text-gray-500 mt-2">
          Zones showing sea-level rise, droughts, and flood risks (based on IPCC reports).
        </p>
      </div>

      {/* 📊 4. Emissions by Country */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">📊 Carbon Emissions by Country</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emissionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#60A5FA" name="Total Emissions (Mt)" />
            <Bar dataKey="perCapita" fill="#F59E0B" name="Per Capita Emissions (t)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GlobalWarming;
