import React from "react";
import { FaRecycle, FaBicycle, FaLightbulb, FaTree, FaWater } from "react-icons/fa";

const tips = [
  {
    icon: <FaRecycle className="text-blue-500 text-2xl" />,
    title: "Recycle & Reuse",
    tip: "Separate your dry & wet waste. Recycle plastic, glass, and paper."
  },
  {
    icon: <FaBicycle className="text-green-600 text-2xl" />,
    title: "Use Eco Transport",
    tip: "Use public transport, walk or bike instead of driving."
  },
  {
    icon: <FaLightbulb className="text-yellow-400 text-2xl" />,
    title: "Save Electricity",
    tip: "Switch off appliances when not in use. Use LED bulbs."
  },
  {
    icon: <FaTree className="text-emerald-700 text-2xl" />,
    title: "Plant Trees",
    tip: "Grow trees or plants around your home or neighborhood."
  },
  {
    icon: <FaWater className="text-cyan-500 text-2xl" />,
    title: "Conserve Water",
    tip: "Fix leaks and use water-saving devices in your home."
  }
];

const SuggestedActionsCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-xl font-bold text-green-700 mb-4">🌱 Suggested Eco Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer bg-gradient-to-br from-green-50 to-white"
          >
            <div className="flex items-center space-x-3 mb-2">
              {tip.icon}
              <h3 className="text-lg font-semibold">{tip.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{tip.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedActionsCard;
