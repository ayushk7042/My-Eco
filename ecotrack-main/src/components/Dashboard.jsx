
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell
// } from "recharts";
// import ClimateSlideshow from "./ClimateSlideshow";
// import ClimateNews from "./ClimateNews";
// import UserCard from "./UserCard";
// import GoalTracker from "./GoalTracker";
// import ClimateStatsCard from "./ClimateStatsCard";

// const COLORS = ["#34D399", "#60A5FA", "#F59E0B", "#EF4444"];

// const Dashboard = () => {
//   const [emissions, setEmissions] = useState([]);
//   const [user, setUser] = useState({});
//   const [city, setCity] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // Fetch user data
//     axios.get("http://localhost:5000/api/auth/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then(res => {
//       setUser(res.data);
//     });

//     // Fetch emission records
//     axios.get("http://localhost:5000/api/emissions", {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then(res => {
//       setEmissions(res.data);
//     });

//     // Auto-detect city
//     axios.get("https://ipapi.co/json/")
//       .then(res => setCity(res.data.city))
//       .catch(() => setCity("Your City"));
//   }, []);

//   // Get last 7 entries for weekly chart
//   const weeklyData = emissions.slice(-7).map((e, i) => ({
//     name: `Day ${i + 1}`,
//     emission: e.totalEmission,
//   }));

//   const monthlyTotal = emissions.reduce((sum, e) => sum + e.totalEmission, 0);

//   const categoryTotals = { electricity: 0, transport: 0, food: 0, waste: 0 };

//   emissions.forEach(e => {
//     categoryTotals.electricity += e.electricity || 0;
//     categoryTotals.transport += e.transport || 0;
//     categoryTotals.food += e.food || 0;
//     categoryTotals.waste += e.waste || 0;
//   });

//   const pieData = Object.entries(categoryTotals).map(([key, value]) => ({
//     name: key.charAt(0).toUpperCase() + key.slice(1),
//     value: parseFloat(value.toFixed(2)),
//   }));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
//       <h1 className="text-3xl font-bold text-green-700 mb-4">
//         Welcome, {user.name || "Eco User"} 🌱
//       </h1>

//       {/* 🌍 Climate Slideshow */}
//       <ClimateSlideshow />

//       {/* 🌐 Real-time Climate Data */}
//       <div className="mt-10">
//         <ClimateStatsCard userEmission={monthlyTotal.toFixed(2)} />
//       </div>

//       {/* 📊 User Card + Goal Tracker */}
//       <div className="grid md:grid-cols-2 gap-6 mt-10">
//         <UserCard name={user.name} city={city} totalEmission={monthlyTotal.toFixed(2)} />
//         <GoalTracker totalEmission={monthlyTotal} />
//       </div>

//       {/* 📈 Stats Cards */}
//       <div className="grid md:grid-cols-3 gap-6 mt-10">
//         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
//           <h3 className="text-gray-600 text-lg font-semibold">Weekly Emission</h3>
//           <p className="text-2xl text-green-600 font-bold mt-2">
//             {weeklyData.reduce((sum, e) => sum + e.emission, 0).toFixed(2)} kg CO₂
//           </p>
//         </div>
//         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
//           <h3 className="text-gray-600 text-lg font-semibold">Monthly Emission</h3>
//           <p className="text-2xl text-yellow-600 font-bold mt-2">
//             {monthlyTotal.toFixed(2)} kg CO₂
//           </p>
//         </div>
//         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
//           <h3 className="text-gray-600 text-lg font-semibold">Total Records</h3>
//           <p className="text-2xl text-blue-600 font-bold mt-2">{emissions.length}</p>
//         </div>
//       </div>

//       {/* 📉 Weekly Emission Graph */}
//       <div className="bg-white shadow-md rounded-lg p-6 my-10">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Emission Trend</h2>
//         {weeklyData.length > 0 ? (
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
//               <Tooltip />
//               <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         ) : (
//           <p className="text-center text-gray-500">No data for graph.</p>
//         )}
//       </div>

//       {/* 🥧 Emission Breakdown Pie */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-10">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">Emission Breakdown by Category</h2>
//         {pieData.every(item => item.value === 0) ? (
//           <p className="text-center text-gray-500">No category data yet.</p>
//         ) : (
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={110}
//                 label
//               >
//                 {pieData.map((_, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         )}
//       </div>

//       {/* 📰 Climate News RSS Feed */}
//       <ClimateNews />
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import ClimateSlideshow from "./ClimateSlideshow";
import ClimateNews from "./ClimateNews";
import UserCard from "./UserCard";
import GoalTracker from "./GoalTracker";
import ClimateStatsCard from "./ClimateStatsCard";
import CityStatsCard from './CityStatsCard';

//import CityStatsGrid from './CityStatsGrid';

const COLORS = ["#34D399", "#60A5FA", "#F59E0B", "#EF4444"];

// ✅ Utility function for safe toFixed
const safeFixed = (val, digits = 2) => Number(val || 0).toFixed(digits);

const Dashboard = () => {
  const [emissions, setEmissions] = useState([]);
  const [user, setUser] = useState({});
  const [city, setCity] = useState("Your City");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Fetch user details
    axios.get("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setUser(res.data)).catch(() => setUser({}));

    // Fetch emissions
    axios.get("http://localhost:5000/api/emissions", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setEmissions(res.data)).catch(() => setEmissions([]));

    // Detect city
    axios.get("https://ipapi.co/json/")
      .then(res => setCity(res.data.city || "Your City"))
      .catch(() => setCity("Your City"));
  }, []);

  // Weekly emission data
  const weeklyData = emissions.slice(-7).map((e, i) => ({
    name: `Day ${i + 1}`,
    emission: Number(e.totalEmission || 0),
  }));

  const monthlyTotal = emissions.reduce((sum, e) => sum + Number(e.totalEmission || 0), 0);

  const categoryTotals = { electricity: 0, transport: 0, food: 0, waste: 0 };
  emissions.forEach(e => {
    categoryTotals.electricity += Number(e.electricity || 0);
    categoryTotals.transport += Number(e.transport || 0);
    categoryTotals.food += Number(e.food || 0);
    categoryTotals.waste += Number(e.waste || 0);
  });

  const pieData = Object.entries(categoryTotals).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: Number(value || 0),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Welcome, {user.name || "Eco User"} 🌱
      </h1>




{/* 🌆 Real-time City-wise Stats */}
<CityStatsCard city={city} />

      {/* 🌍 Climate Slideshow */}
      <ClimateSlideshow />

      {/* 🌐 Real-time Climate Data */}
      <div className="mt-10">
        <ClimateStatsCard userEmission={safeFixed(monthlyTotal)} />
      </div>

      {/* 📊 User Card + Goal Tracker */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <UserCard name={user.name} city={city} totalEmission={safeFixed(monthlyTotal)} />
        <GoalTracker totalEmission={monthlyTotal} />
      </div>

      {/* 📈 Stats Summary */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg p-5 rounded-lg text-center">
          <h3 className="text-gray-600 text-lg font-semibold">Weekly Emission</h3>
          <p className="text-2xl text-green-600 font-bold mt-2">
            {safeFixed(weeklyData.reduce((sum, e) => sum + e.emission, 0))} kg CO₂
          </p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg text-center">
          <h3 className="text-gray-600 text-lg font-semibold">Monthly Emission</h3>
          <p className="text-2xl text-yellow-600 font-bold mt-2">
            {safeFixed(monthlyTotal)} kg CO₂
          </p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg text-center">
          <h3 className="text-gray-600 text-lg font-semibold">Total Records</h3>
          <p className="text-2xl text-blue-600 font-bold mt-2">{emissions.length}</p>
        </div>
      </div>

      {/* 📉 Weekly Graph */}
      <div className="bg-white shadow-md rounded-lg p-6 my-10">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Emission Trend</h2>
        {weeklyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No data for graph.</p>
        )}
      </div>

      {/* 🥧 Emission Breakdown */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Emission Breakdown by Category</h2>
        {pieData.every(item => item.value === 0) ? (
          <p className="text-center text-gray-500">No category data yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* 📰 Climate News Feed */}
      <ClimateNews />
    </div>
  );
};

export default Dashboard;
