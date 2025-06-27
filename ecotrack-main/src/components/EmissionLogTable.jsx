import React from "react";
import { FaCar, FaLeaf, FaDrumstickBite, FaTrash } from "react-icons/fa";

const categoryIcons = {
  transport: <FaCar className="text-blue-500" />,
  electricity: <FaLeaf className="text-green-600" />,
  food: <FaDrumstickBite className="text-red-400" />,
  waste: <FaTrash className="text-yellow-600" />,
};

const EmissionLogTable = ({ emissions = [] }) => {
  if (!emissions.length) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No emission history available yet.
      </p>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-green-700">📊 Emission History</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-green-100 text-left text-gray-700 font-semibold">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Value (kg)</th>
            <th className="py-2 px-4">Icon</th>
          </tr>
        </thead>
        <tbody>
          {emissions.map((entry, index) =>
            ["electricity", "transport", "food", "waste"].map((cat) => (
              entry[cat] ? (
                <tr key={`${index}-${cat}`} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{new Date(entry.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 capitalize">{cat}</td>
                  <td className="py-2 px-4">{entry[cat].toFixed(2)} kg</td>
                  <td className="py-2 px-4">{categoryIcons[cat]}</td>
                </tr>
              ) : null
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmissionLogTable;
