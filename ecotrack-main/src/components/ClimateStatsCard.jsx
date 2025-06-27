import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { Globe, Thermometer, Activity } from 'lucide-react';

const ClimateStatsCard = ({ userEmission }) => {
  const [co2, setCo2] = useState(null);
  const [tempRise, setTempRise] = useState(null);
  const [worldAvg, setWorldAvg] = useState(120); // default kg CO₂/month per person
  const [error, setError] = useState(null);

  // Fetch global climate data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example CO2 API (mock or real endpoint if available)
        const co2Res = await axios.get('https://global-warming.org/api/co2-api');
        const lastCO2 = co2Res.data.co2.slice(-1)[0]?.trend || 420;
        setCo2(parseFloat(lastCO2).toFixed(2));

        // Example global temperature rise (mock or Open-Meteo if enabled)
        const tempRes = await axios.get('https://global-warming.org/api/temperature-api');
        const latestTemp = tempRes.data.result.slice(-1)[0]?.land || 1.2;
        setTempRise(parseFloat(latestTemp).toFixed(2));
      } catch (err) {
        console.error("Climate API fetch failed", err);
        setError("Live data unavailable, showing defaults.");
        setCo2(420.69);
        setTempRise(1.21);
      }
    };

    fetchData();
  }, []);

  const data = [
    { name: 'World Avg', Emission: worldAvg },
    { name: 'You', Emission: parseFloat(userEmission || 0) },
  ];

  const topCountries = [
    { name: 'China', emission: '10,065 Mt' },
    { name: 'USA', emission: '5,416 Mt' },
    { name: 'India', emission: '2,654 Mt' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌍 Global Climate Stats</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
        <div className="p-4 border rounded">
          <Globe className="mx-auto text-blue-600 mb-2" size={32} />
          <p className="text-gray-500">CO₂ PPM</p>
          <p className="text-xl font-semibold text-blue-600">{co2 || "..."}</p>
        </div>
        <div className="p-4 border rounded">
          <Thermometer className="mx-auto text-red-600 mb-2" size={32} />
          <p className="text-gray-500">Temp Rise (°C)</p>
          <p className="text-xl font-semibold text-red-600">{tempRise || "..."}</p>
        </div>
        <div className="p-4 border rounded">
          <Activity className="mx-auto text-yellow-600 mb-2" size={32} />
          <p className="text-gray-500">Your Monthly Emission</p>
          <p className="text-xl font-semibold text-yellow-600">{userEmission} kg CO₂</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">🌐 Top Polluting Countries</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 mb-6">
        {topCountries.map((c, i) => (
          <li key={i}>
            <span className="font-bold">{c.name}:</span> {c.emission}
          </li>
        ))}
      </ul>

      <div className="bg-gray-50 p-4 rounded shadow-inner">
        <h3 className="text-md font-bold text-gray-700 mb-2 text-center">🌱 Your Impact vs World Average</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Emission" fill="#10B981" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClimateStatsCard;
