import React, { useEffect, useState } from "react";
import axios from "axios";

const CityStats = () => {
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cities").then((res) => {
      setCities(res.data);
    });
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">City-wise CO₂ Emission Statistics</h2>
      <select
        onChange={(e) =>
          setSelected(cities.find((c) => c.city === e.target.value))
        }
        className="p-2 border border-gray-300 rounded w-full mb-4"
      >
        <option>Select a city</option>
        {cities.map((city) => (
          <option key={city.city} value={city.city}>
            {city.city}
          </option>
        ))}
      </select>

      {selected && (
        <div className="text-lg font-medium text-green-700">
          Average Emission in {selected.city}:{" "}
          <strong>{selected.averageEmission} kg CO₂/year</strong>
        </div>
      )}
    </div>
  );
};

export default CityStats;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CityStatsCard = ({ city }) => {
//   const [stats, setStats] = useState(null);

//   useEffect(() => {
//     if (!city) return;
//     axios.get(`http://localhost:5000/api/cities/${city}`)
//       .then(res => setStats(res.data))
//       .catch(err => console.error('City stats error', err));
//   }, [city]);

//   if (!stats) return <p>Loading stats...</p>;

//   const { aqi, co2 } = stats;
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h3 className="text-lg font-semibold">Current Stats: {city}</h3>
//       {aqi && <p>AQI: {aqi.aqi} ({aqi.category})</p>}
//       {co2 && <p>CO₂ Emission Rate: {co2.value} tCO₂/day</p>}
//     </div>
//   );
// };

// export default CityStatsCard;
