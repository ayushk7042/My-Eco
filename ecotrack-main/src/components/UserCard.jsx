// // components/UserCard.jsx
// import React from "react";
// import { FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";

// const UserCard = ({ name, city, totalEmission }) => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 mb-6">
//       <FaUserCircle className="text-6xl text-green-500" />
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800">{name || "Eco User"}</h2>
//         <p className="text-gray-600 flex items-center gap-2"><FaMapMarkerAlt /> {city || "Auto-detecting..."}</p>
//         <p className="text-lg font-semibold text-green-600 mt-2">Total CO₂: {totalEmission.toFixed(2)} kg</p>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const UserCard = ({ name, city, totalEmission }) => {
  const emissionValue = parseFloat(totalEmission) || 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 mb-6">
      <div className="bg-green-100 rounded-full p-4">
        <FaLeaf className="text-green-600 text-3xl" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800">Welcome, {name}</h2>
        <p className="text-gray-600">City: {city || "Unknown"}</p>
        <span className="text-lg font-semibold">{emissionValue.toFixed(2)} kg CO₂</span>
      </div>
    </div>
  );
};

export default UserCard;
