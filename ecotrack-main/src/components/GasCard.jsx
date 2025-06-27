// src/components/GasCard.jsx
import React from "react";

const GasCard = ({ gas }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition duration-300 border-l-4" style={{ borderColor: gas.color }}>
      <div className="flex items-center mb-2">
        <span className="text-3xl mr-3">{gas.icon}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{gas.name}</h2>
          <p className="text-gray-500 italic">{gas.formula}</p>
        </div>
      </div>

      <ul className="text-sm text-gray-700 space-y-1 mt-2">
        <li><strong>Source:</strong> {gas.source}</li>
        <li><strong>Impact:</strong> {gas.impact}</li>
        <li><strong>Lifespan:</strong> {gas.lifespan}</li>
      </ul>

      <div className="mt-4 text-green-700 bg-green-50 text-sm rounded p-2 hover:bg-green-100 transition">
        🌟 <em>{gas.fact}</em>
      </div>
    </div>
  );
};

export default GasCard;
