// import React, { useState } from 'react';

// // 


// const slides = [
//   {
//     title: "Carbon Dioxide (CO₂)",
//     content: "Major contributor to global warming. Comes from fossil fuels, deforestation, etc."
//   },
//   {
//     title: "Methane (CH₄)",
//     content: "More potent than CO₂. Comes from agriculture, landfills, oil and gas systems."
//   },
//   {
//     title: "Nitrous Oxide (N₂O)",
//     content: "Emitted from fertilizers, biomass burning, and industrial processes."
//   },
//   {
//     title: "Chlorofluorocarbons (CFCs)",
//     content: "Synthetic gas. Damages ozone and traps heat in the atmosphere."
//   },
//   {
//     title: "Ozone (O₃)",
//     content: "Tropospheric ozone is a greenhouse gas and air pollutant."
//   },
//   {
//     title: "Why is Global Warming Increasing?",
//     content: `🔥 Burning of fossil fuels\n🌲 Deforestation\n🏭 Industrial emissions\n🚗 Transportation pollution\n🌡️ Lifestyle choices & lack of awareness`
//   }
// ];

// const GasSlides = () => {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((index + 1) % slides.length);
//   const prev = () => setIndex((index - 1 + slides.length) % slides.length);

//   return (
//     <div className="p-6 text-center">
//       <h2 className="text-xl font-bold text-red-600 mb-4">🌍 Greenhouse Gases & Global Warming</h2>
//       <div className="bg-gray-100 p-6 rounded shadow-md min-h-[180px]">
//         <h3 className="text-xl font-semibold mb-2">{slides[index].title}</h3>
//         <p className="text-gray-700 whitespace-pre-line">{slides[index].content}</p>
//       </div>
//       <div className="mt-4 flex justify-center gap-4">
//         <button onClick={prev} className="bg-green-500 text-white px-4 py-1 rounded">⬅️ Prev</button>
//         <button onClick={next} className="bg-green-500 text-white px-4 py-1 rounded">Next ➡️</button>
//       </div>
//     </div>
//   );
// };

// export default GasSlides;
import React from "react";
import GasCard from "./GasCard";
import GasRadarChart from "./GasRadarChart";
import GasFactsMarquee from "./GasFactsMarquee";

const gases = [
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    source: "Fossil fuels, deforestation",
    impact: "Baseline (1x)",
    lifespan: "100+ years",
    icon: "🟤",
    color: "#A0AEC0",
    fact: "CO₂ accounts for over 75% of global greenhouse gas emissions."
  },
  {
    name: "Methane",
    formula: "CH₄",
    source: "Livestock, landfills",
    impact: "25x CO₂",
    lifespan: "12 years",
    icon: "🟢",
    color: "#48BB78",
    fact: "Methane is over 80 times more potent than CO₂ in the first 20 years."
  },
  {
    name: "Nitrous Oxide",
    formula: "N₂O",
    source: "Fertilizers, biomass burning",
    impact: "298x CO₂",
    lifespan: "114 years",
    icon: "🔵",
    color: "#4299E1",
    fact: "Used in anesthesia but a major contributor to ozone depletion."
  },
  {
    name: "CFCs",
    formula: "CFC-12",
    source: "Refrigerants (now banned)",
    impact: "10,900x CO₂",
    lifespan: "100+ years",
    icon: "🟣",
    color: "#9F7AEA",
    fact: "CFCs are banned in most countries due to ozone layer damage."
  },
  {
    name: "Ozone",
    formula: "O₃",
    source: "Smog, VOCs, UV reactions",
    impact: "Indirect",
    lifespan: "Short-lived",
    icon: "🟠",
    color: "#ED8936",
    fact: "Ground-level ozone causes respiratory issues and crops damage."
  }
];

const GasSlides = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🌍 Greenhouse Gases Overview
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {gases.map((gas, idx) => (
          <GasCard key={idx} gas={gas} />
        ))}
      </div>

      <div className="mt-10">
        <GasRadarChart />
      </div>

      <div className="mt-10">
        <GasFactsMarquee gases={gases} />
      </div>
    </div>
  );
};

export default GasSlides;
