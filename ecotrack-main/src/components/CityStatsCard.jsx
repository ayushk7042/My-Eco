// // src/components/CityStatsCard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const CityStatsCard = ({ city }) => {
//   const [cityStats, setCityStats] = useState(null);

//   useEffect(() => {
//     const fetchCityStats = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.api-ninjas.com/v1/airquality?city=${city}`,
//           {
//             headers: { "X-Api-Key": "YOUR_API_KEY" } // Replace with your real API key
//           }
//         );
//         setCityStats(response.data);
//       } catch (error) {
//         console.error("Error fetching city air quality:", error);
//       }
//     };

//     if (city) fetchCityStats();
//   }, [city]);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//       <h2 className="text-xl font-bold mb-4 text-green-700">
//         Real-Time Stats for {city}
//       </h2>
//       {cityStats ? (
//         <div className="space-y-2 text-gray-700">
//           <p><strong>AQI (Overall):</strong> {cityStats.overall_aqi}</p>
//           <p><strong>CO (Carbon Monoxide):</strong> {cityStats.CO.concentration} µg/m³</p>
//           <p><strong>NO₂ (Nitrogen Dioxide):</strong> {cityStats.NO2.concentration} µg/m³</p>
//           <p><strong>PM2.5:</strong> {cityStats.PM2_5.concentration} µg/m³</p>
//         </div>
//       ) : (
//         <p>Loading city stats...</p>
//       )}
//     </div>
//   );
// };

// export default CityStatsCard;
import React, { useEffect, useState } from "react";
import axios from "axios";

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai",
  "Pune", "Hyderabad", "Ahmedabad", "Lucknow", "Jaipur"
];

const CityStatsCard = () => {
  const [aqiData, setAqiData] = useState({});

  useEffect(() => {
    const fetchCityAQI = async () => {
      const key = import.meta.env.VITE_AIRQ_NINJAS_KEY; 
      const results = {};

      await Promise.all(cities.map(async city => {
        try {
          const res = await axios.get("https://api.api-ninjas.com/v1/airquality", {
            params: { city, country: "India" },
            headers: { "X-Api-Key": key }
          });
          results[city] = res.data.aqi;  // eg. {Delhi: 200, ...}
        } catch (err) {
          console.error(`Error fetching AQI for ${city}`, err);
          results[city] = "-";
        }
      }));

      setAqiData(results);
    };

    fetchCityAQI();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-10">
      <h2 className="text-xl font-bold mb-4">AQI of Top 10 Indian Cities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {cities.map(city => (
          <div key={city} className="bg-green-50 p-4 rounded-xl text-center">
            <h3 className="font-semibold text-gray-800">{city}</h3>
            <p className="text-2xl font-bold text-green-700">
              {aqiData[city] || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityStatsCard;
