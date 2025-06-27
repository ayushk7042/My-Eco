// src/components/EcoEventsSlider.jsx
import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "🌍 Earth Day",
    date: "April 22",
    description: "Join millions worldwide to restore our Earth."
  },
  {
    title: "🌱 World Environment Day",
    date: "June 5",
    description: "Take action against plastic pollution and emissions."
  },
  {
    title: "🚲 Car-Free Day",
    date: "September 22",
    description: "Ditch the car and reduce emissions for a day."
  },
  {
    title: "🌾 Zero Waste Week",
    date: "September 4–8",
    description: "Challenge yourself to produce no waste this week!"
  },
  {
    title: "🎯 Personal Eco Challenge",
    date: "This Week",
    description: "Try to stay under 5kg CO₂ usage in 7 days!"
  }
];

const EcoEventsSlider = () => {
  return (
    <div className="mt-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        🌐 Upcoming Eco Events & Challenges
      </h2>
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[250px] bg-white shadow-md rounded-xl p-5 border border-green-100"
          >
            <h3 className="text-xl font-semibold text-green-600">{event.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{event.date}</p>
            <p className="mt-3 text-gray-700">{event.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional slider scrollbar style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default EcoEventsSlider;
