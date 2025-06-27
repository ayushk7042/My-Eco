// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// const CityComparisonGraph = ({ userEmission }) => {
//   const [city, setCity] = useState('');
//   const [cityEmission, setCityEmission] = useState(null);

//   // Auto-detect city using IP geolocation API
//   useEffect(() => {
//     const fetchCity = async () => {
//       try {
//         const res = await axios.get('https://ipapi.co/json');
//         setCity(res.data.city);
//       } catch (err) {
//         console.error('Error fetching location:', err);
//       }
//     };
//     fetchCity();
//   }, []);

//   // Fetch emission for detected city
//   useEffect(() => {
//     if (city) {
//       axios
//         .get(`http://localhost:5000/api/city-emissions/${city}`)
//         .then((res) => setCityEmission(res.data.emission))
//         .catch((err) => console.error('Error fetching city emission:', err));
//     }
//   }, [city]);

//   const data = [
//     { name: 'Your Emission', CO2: parseFloat(userEmission) },
//     {
//       name: city ? `${city} Avg` : 'City Avg',
//       CO2: cityEmission || 0,
//     },
//   ];

//   return (
//     <div className="p-6 bg-white shadow-md rounded-xl mt-6">
//       <h2 className="text-xl font-semibold text-center text-green-600 mb-4">
//         City-wise CO₂ Emission Comparison
//       </h2>
//       {cityEmission !== null ? (
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="CO2"
//               stroke="#34D399"
//               strokeWidth={3}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       ) : (
//         <p className="text-center text-gray-500">Loading city data...</p>
//       )}
//     </div>
//   );
// };

// export default CityComparisonGraph;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const CityComparisonGraph = ({ userEmission }) => {
  const [city, setCity] = useState('');
  const [cityEmission, setCityEmission] = useState(null);
  const [allCitiesData, setAllCitiesData] = useState([]);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await axios.get('https://ipapi.co/json');
        setCity(res.data.city);
      } catch (err) {
        console.error('Error fetching location:', err);
      }
    };
    fetchCity();
  }, []);

  useEffect(() => {
    if (city) {
      axios.get(`http://localhost:5000/api/city-emissions/${city}`)
        .then(res => {
          setCityEmission(res.data.emission);
          const cities = Object.entries(res.data.allCities).map(([name, CO2]) => ({ name, CO2 }));
          setAllCitiesData(cities);
        })
        .catch(err => console.error('Error fetching city emission:', err));
    }
  }, [city]);

  const data = [
    { name: 'Your Emission', CO2: parseFloat(userEmission) },
    { name: `${city} Avg`, CO2: cityEmission || 0 },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-xl font-semibold text-center text-green-600 mb-4">City-wise CO₂ Emission Comparison</h2>
      {cityEmission !== null ? (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="CO2" stroke="#34D399" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>

          <h3 className="text-lg font-semibold mt-8 text-center text-gray-700">CO₂ Emissions Across Cities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={allCitiesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'kg CO₂/day', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="CO2" fill="#60A5FA" />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading city data...</p>
      )}
    </div>
  );
};

export default CityComparisonGraph;