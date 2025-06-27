// src/components/GasFactsMarquee.jsx
import React from "react";

const GasFactsMarquee = ({ gases }) => {
  const allFacts = gases.map(g => `${g.icon} ${g.name}: ${g.fact}`);
  
  return (
    <div className="overflow-hidden whitespace-nowrap bg-green-100 py-2 rounded mt-6 shadow-inner">
      <div className="animate-marquee inline-block min-w-full text-sm font-medium text-green-800">
        {allFacts.map((fact, i) => (
          <span key={i} className="mx-8">{fact}</span>
        ))}
      </div>

      {/* Tailwind animation for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GasFactsMarquee;
