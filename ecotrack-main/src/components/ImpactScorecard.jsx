// src/components/ImpactScorecard.jsx
import React from "react";

const ImpactScorecard = ({ totalEmission = 0, improvement = 15, rank = "Above Average" }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-10 mx-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">💚 Your Impact Scorecard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-green-100 p-4 rounded-md">
          <p className="text-gray-600">Total Emission This Month</p>
          <p className="text-2xl font-semibold text-green-800">{totalEmission} kg CO₂</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-gray-600">Improvement from Last Month</p>
          <p className="text-2xl font-semibold text-yellow-700">▲ {improvement}%</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-md">
          <p className="text-gray-600">Your Rank</p>
          <p className="text-2xl font-semibold text-blue-700">{rank} 🏅</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactScorecard;
