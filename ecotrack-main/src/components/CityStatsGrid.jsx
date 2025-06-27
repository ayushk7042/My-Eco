import React, { useEffect, useState } from 'react';
import axios from 'axios';

const cities = ["Delhi","Mumbai","Bangalore","Kolkata","Chennai","Pune","Hyderabad","Ahmedabad","Jaipur","Lucknow"];

export default function CityStatsGrid() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    Promise.all(cities.map(city =>
      axios.get(`http://localhost:5000/api/city-stats/${city}`)
        .then(res => ({ city, aqi: res.data.overall_aqi }))
        .catch(() => ({ city, aqi: null }))
    )).then(setStats);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
      {stats.map(s => (
        <div key={s.city} className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-bold">{s.city}</h3>
          {s.aqi !== null 
            ? <p className="text-green-600">AQI: {s.aqi}</p> 
            : <p className="text-red-500">Data unavailable</p>}
        </div>
      ))}
    </div>
  );
}
