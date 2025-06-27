

// // // import React, { useState } from 'react';
// // // import { motion } from "framer-motion";
// // // import { FaLeaf, FaBus, FaExclamationTriangle } from "react-icons/fa";
// // // import CityComparisonGraph from './CityComparisonGraph';

// // // const EmissionCalculator = () => {
// // //   const [formData, setFormData] = useState({
// // //     vehicleType: 'car',
// // //     vehicleAge: '',
// // //     vehicleDistance: '',
// // //     fuelType: 'petrol',
// // //     electricityType: 'home',
// // //     electricityUsage: '',
// // //     foodDays: '',
// // //     waste: '',
// // //   });

// // //   const [emissionResult, setEmissionResult] = useState(null);
// // //   const [advice, setAdvice] = useState({ icon: null, message: [] });
// // //   const [selectedCity, setSelectedCity] = useState('Delhi');

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const calculateEmissions = () => {
// // //     let transportFactor = 0.2;

// // //     // Adjust factor by vehicle type and age
// // //     if (formData.vehicleType === 'truck') transportFactor = 0.3;
// // //     if (formData.vehicleType === 'bike') transportFactor = 0.1;
// // //     if (parseInt(formData.vehicleAge) > 5) transportFactor += 0.05;

// // //     // Fuel type adjustments
// // //     if (formData.fuelType === 'diesel') transportFactor += 0.05;
// // //     if (formData.fuelType === 'electric') transportFactor -= 0.05;

// // //     const transportEmission = parseFloat(formData.vehicleDistance || 0) * transportFactor;

// // //     let electricityFactor = 0.5;
// // //     if (formData.electricityType === 'industry') electricityFactor = 1.2;
// // //     else if (formData.electricityType === 'shop') electricityFactor = 0.8;

// // //     const electricityEmission = parseFloat(formData.electricityUsage || 0) * electricityFactor;

// // //     const foodEmission = parseFloat(formData.foodDays || 0) * 2.5;
// // //     const wasteEmission = parseFloat(formData.waste || 0) * 1.8;

// // //     const total = transportEmission + electricityEmission + foodEmission + wasteEmission;
// // //     const totalFixed = total.toFixed(2);
// // //     setEmissionResult(totalFixed);
// // //     setAdvice(getAdvice(total));
// // //   };

// // //   const getAdvice = (emission) => {
// // //     if (emission < 50) {
// // //       return {
// // //         icon: <FaLeaf className="text-green-600 text-3xl" />,
// // //         message: [
// // //           "Great job! Use energy-efficient appliances.",
// // //           "Cycle or walk instead of using vehicles.",
// // //           "Adopt solar or renewable energy."
// // //         ]
// // //       };
// // //     } else if (emission < 150) {
// // //       return {
// // //         icon: <FaBus className="text-yellow-500 text-3xl" />,
// // //         message: [
// // //           "Try carpooling and public transport.",
// // //           "Limit meat-based meals.",
// // //           "Unplug electronics when not in use."
// // //         ]
// // //       };
// // //     } else {
// // //       return {
// // //         icon: <FaExclamationTriangle className="text-red-600 text-3xl" />,
// // //         message: [
// // //           "Consider switching to clean energy sources.",
// // //           "Reduce driving and fly less.",
// // //           "Conduct an energy audit of your home."
// // //         ]
// // //       };
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
// // //       <h1 className="text-3xl font-bold text-center mb-6 text-green-800">Advanced Carbon Emission Calculator</h1>

// // //       <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-5">
// // //         {/* Transport */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div>
// // //             <label>Vehicle Type:</label>
// // //             <select name="vehicleType" className="w-full border p-2" onChange={handleChange}>
// // //               <option value="car">Car</option>
// // //               <option value="bike">Bike</option>
// // //               <option value="truck">Truck</option>
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label>Vehicle Age (Years):</label>
// // //             <input type="number" name="vehicleAge" onChange={handleChange} className="w-full border p-2" />
// // //           </div>
// // //           <div>
// // //             <label>Distance Travelled (km):</label>
// // //             <input type="number" name="vehicleDistance" onChange={handleChange} className="w-full border p-2" />
// // //           </div>
// // //           <div>
// // //             <label>Fuel Type:</label>
// // //             <select name="fuelType" className="w-full border p-2" onChange={handleChange}>
// // //               <option value="petrol">Petrol</option>
// // //               <option value="diesel">Diesel</option>
// // //               <option value="cng">CNG</option>
// // //               <option value="electric">Electric</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Electricity */}
// // //         <div>
// // //           <label>Electricity Type:</label>
// // //           <select name="electricityType" className="w-full border p-2" onChange={handleChange}>
// // //             <option value="home">Home</option>
// // //             <option value="shop">Shop</option>
// // //             <option value="industry">Industry</option>
// // //           </select>
// // //         </div>
// // //         <div>
// // //           <label>Electricity Usage (kWh):</label>
// // //           <input type="number" name="electricityUsage" onChange={handleChange} className="w-full border p-2" />
// // //         </div>

// // //         {/* Food & Waste */}
// // //         <div>
// // //           <label>Food Consumption (Days):</label>
// // //           <input type="number" name="foodDays" onChange={handleChange} className="w-full border p-2" />
// // //         </div>
// // //         <div>
// // //           <label>Waste Generated (kg):</label>
// // //           <input type="number" name="waste" onChange={handleChange} className="w-full border p-2" />
// // //         </div>

// // //         {/* City Selection */}
// // //         <div>
// // //           <label>Select City for Stats:</label>
// // //           <select
// // //             className="w-full border p-2"
// // //             value={selectedCity}
// // //             onChange={(e) => setSelectedCity(e.target.value)}
// // //           >
// // //             <option>Delhi</option>
// // //             <option>Mumbai</option>
// // //             <option>Bangalore</option>
// // //             <option>Chennai</option>
// // //             <option>Kolkata</option>
// // //             <option>Pune</option>
// // //             <option>Hyderabad</option>
// // //             <option>Jaipur</option>
// // //           </select>
// // //         </div>

// // //         <button
// // //           onClick={calculateEmissions}
// // //           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
// // //         >
// // //           Calculate Emissions
// // //         </button>

// // //         {/* Emission Result */}
// // //         {emissionResult && (
// // //           <>
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               className="text-xl font-semibold text-center mt-6"
// // //             >
// // //               Total Emissions: {emissionResult} kg CO₂
// // //             </motion.div>

// // //             <div className="mt-8">
// // //               <CityComparisonGraph userEmission={emissionResult} selectedCity={selectedCity} />
// // //             </div>
// // //           </>
// // //         )}

// // //         {/* Tips Section */}
// // //         {advice.message.length > 0 && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded"
// // //           >
// // //             <div className="flex items-center gap-3 mb-2">{advice.icon}
// // //               <h3 className="text-lg font-bold">Tips to Reduce Your Emissions</h3>
// // //             </div>
// // //             <ul className="list-disc list-inside text-green-800">
// // //               {advice.message.map((tip, idx) => (
// // //                 <li key={idx}>{tip}</li>
// // //               ))}
// // //             </ul>
// // //           </motion.div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default EmissionCalculator;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import toast from "react-hot-toast";

// // const EmissionCalculator = () => {
// //   const [form, setForm] = useState({
// //     distance: "",
// //     vehicleType: "car",
// //     fuelType: "petrol",
// //     electricityUsage: "",
// //     usageType: "home",
// //     foodImpact: "low"
// //   });

// //   const [totalEmission, setTotalEmission] = useState(0);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //     calculateEmission({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const calculateEmission = (data) => {
// //     let emission = 0;

// //     // 🚗 Transport Emissions
// //     const transportFactors = {
// //       petrol: 2.31,
// //       diesel: 2.68,
// //       cng: 2.16,
// //       electric: 0.5
// //     };
// //     emission += (data.distance || 0) * (transportFactors[data.fuelType] || 2.31);

// //     // ⚡ Electricity Emissions
// //     const usageFactors = {
// //       home: 0.9,
// //       industry: 1.8,
// //       shop: 1.2
// //     };
// //     emission += (data.electricityUsage || 0) * (usageFactors[data.usageType] || 1);

// //     // 🍽️ Food Emissions
// //     const foodFactors = {
// //       low: 0.5,
// //       moderate: 1,
// //       high: 1.8
// //     };
// //     emission += foodFactors[data.foodImpact] * 10;

// //     setTotalEmission(emission);
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       await axios.post("/api/emissions/log", {
// //         ...form,
// //         emission: totalEmission
// //       });
// //       toast.success("Emission data saved!");
// //     } catch (err) {
// //       toast.error("Error saving data");
// //     }
// //   };

// //   const badge =
// //     totalEmission < 50 ? "🌿 Low" :
// //     totalEmission < 150 ? "⚠️ Moderate" :
// //     "🔥 High";

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-lg">
// //       <h1 className="text-3xl font-bold mb-6 text-green-700">Carbon Emission Calculator</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* 🚗 Vehicle Section */}
// //         <div>
// //           <label className="block font-medium mb-1">🚗 Distance Traveled (km)</label>
// //           <input
// //             type="number"
// //             name="distance"
// //             value={form.distance}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Vehicle Type</label>
// //           <select
// //             name="vehicleType"
// //             value={form.vehicleType}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="car">Car</option>
// //             <option value="bike">Bike</option>
// //             <option value="truck">Truck</option>
// //           </select>
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Fuel Type</label>
// //           <select
// //             name="fuelType"
// //             value={form.fuelType}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="petrol">Petrol</option>
// //             <option value="diesel">Diesel</option>
// //             <option value="cng">CNG</option>
// //             <option value="electric">Electric</option>
// //           </select>
// //         </div>

// //         {/* ⚡ Electricity Section */}
// //         <div>
// //           <label className="block font-medium mb-1">⚡ Electricity Used (kWh)</label>
// //           <input
// //             type="number"
// //             name="electricityUsage"
// //             value={form.electricityUsage}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block font-medium mb-1">Usage Type</label>
// //           <select
// //             name="usageType"
// //             value={form.usageType}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="home">Home</option>
// //             <option value="industry">Industry</option>
// //             <option value="shop">Shop</option>
// //           </select>
// //         </div>

// //         {/* 🍽️ Food Section */}
// //         <div>
// //           <label className="block font-medium mb-1">🍽️ Food Consumption</label>
// //           <select
// //             name="foodImpact"
// //             value={form.foodImpact}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="low">Plant-based (Low)</option>
// //             <option value="moderate">Mixed Diet</option>
// //             <option value="high">High Meat (High)</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* 📊 Emission Summary */}
// //       <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center">
// //         <h3 className="text-xl font-semibold text-gray-800">Your Estimated Emission</h3>
// //         <p className="text-3xl font-bold text-green-700 mt-2">{totalEmission.toFixed(2)} kg CO₂</p>
// //         <span className="inline-block mt-2 px-4 py-1 rounded-full bg-green-200 text-green-800 font-medium">
// //           {badge} Emission
// //         </span>
// //       </div>

// //       {/* 💾 Save Button */}
// //       <div className="mt-6 text-center">
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
// //         >
// //           Save Emission Data
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmissionCalculator;
// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const EmissionCalculator = () => {
//   const [transport, setTransport] = useState(0);
//   const [vehicleAge, setVehicleAge] = useState(0);

//   const [energy, setEnergy] = useState(0);
//   const [food, setFood] = useState(0);
//   const [foodDays, setFoodDays] = useState(1);

//   const [result, setResult] = useState(null);
//   const [tips, setTips] = useState([]);

//   const calculateEmission = async () => {
//     // Convert inputs to float
//     const t = parseFloat(transport);
//     const a = parseFloat(vehicleAge);
//     const e = parseFloat(energy);
//     const f = parseFloat(food);
//     const d = parseInt(foodDays);

//     // Weighted emission calculations
//     const transportEmission = t * (1 + a * 0.02); // Older vehicles = more CO₂
//     const foodEmission = f * d;

//     const total = transportEmission + energy + foodEmission;
//     setResult(total);

//     // Smart tips
//     const suggestions = [];
//     if (transportEmission > 10) suggestions.push("🚗 Try using public transport or newer fuel-efficient vehicles.");
//     if (a > 10) suggestions.push("🛠️ Consider servicing or replacing older vehicles to reduce emissions.");
//     if (energy > 5) suggestions.push("⚡ Use energy-efficient appliances or switch to renewables.");
//     if (foodEmission > 10) suggestions.push("🥗 Try plant-based meals or reduce meat/dairy consumption.");
//     if (total < 5) suggestions.push("🌱 Excellent! Your CO₂ footprint is very low.");

//     setTips(suggestions);

//     try {
//       const token = localStorage.getItem("token");

//       await axios.post("http://localhost:5000/api/emissions/save", {
//         transport: transportEmission.toFixed(2),
//         vehicleAge: a,
//         energy,
//         food: foodEmission.toFixed(2),
//         total: total.toFixed(2),
//         date: new Date()
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       toast.success("Emission data saved successfully!");
//     } catch (err) {
//       toast.error("Failed to save emission data.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         🌍 Advanced CO₂ Emission Calculator
//       </h2>

//       <label className="block font-medium mb-1">🚗 Transport Emission (km/day or kg CO₂)</label>
//       <input
//         type="number"
//         value={transport}
//         onChange={(e) => setTransport(e.target.value)}
//         className="w-full mb-4 p-2 border rounded"
//         placeholder="e.g., 6.5"
//       />

//       <label className="block font-medium mb-1">🛠️ Vehicle Age (in years)</label>
//       <input
//         type="number"
//         value={vehicleAge}
//         onChange={(e) => setVehicleAge(e.target.value)}
//         className="w-full mb-4 p-2 border rounded"
//         placeholder="e.g., 5"
//       />

//       <label className="block font-medium mb-1">⚡ Electricity Usage (kWh/day)</label>
//       <input
//         type="number"
//         value={energy}
//         onChange={(e) => setEnergy(e.target.value)}
//         className="w-full mb-4 p-2 border rounded"
//         placeholder="e.g., 3.2"
//       />

//       <label className="block font-medium mb-1">🍽️ Daily Food Emission Estimate (kg CO₂/day)</label>
//       <input
//         type="number"
//         value={food}
//         onChange={(e) => setFood(e.target.value)}
//         className="w-full mb-4 p-2 border rounded"
//         placeholder="e.g., 1.2"
//       />

//       <label className="block font-medium mb-1">📅 Days of Food Consumption</label>
//       <input
//         type="number"
//         value={foodDays}
//         onChange={(e) => setFoodDays(e.target.value)}
//         className="w-full mb-6 p-2 border rounded"
//         placeholder="e.g., 7"
//       />

//       <button
//         onClick={calculateEmission}
//         className="bg-green-600 hover:bg-green-700 text-white w-full py-2 px-6 font-semibold rounded transition"
//       >
//         Calculate & Save
//       </button>

//       {result !== null && (
//         <div className="mt-6 text-center bg-gray-50 p-4 rounded-lg shadow-inner">
//           <h3 className="text-xl font-bold text-green-800 mb-2">
//             Your Total Emission: {result.toFixed(2)} kg CO₂
//           </h3>
//           <ul className="text-left text-sm text-gray-700 list-disc list-inside">
//             {tips.map((tip, i) => (
//               <li key={i}>{tip}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmissionCalculator;
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EmissionCalculator = () => {
  const [vehicleType, setVehicleType] = useState("car");
  const [fuelType, setFuelType] = useState("petrol");
  const [vehicleAge, setVehicleAge] = useState(5);
  const [distance, setDistance] = useState(10); // km/day

  const [electricityUsage, setElectricityUsage] = useState(3);
  const [electricityType, setElectricityType] = useState("home");

  const [foodType, setFoodType] = useState("meat");
  const [foodDays, setFoodDays] = useState(7);

  const [result, setResult] = useState(null);
  const [tips, setTips] = useState([]);

  const fuelEmissionFactors = {
    petrol: 2.31,
    diesel: 2.68,
    cng: 1.51,
    electric: 0.5, // approx for EV (indirect grid)
  };

  const vehicleTypeFactor = {
    car: 1,
    truck: 2,
    bike: 0.6,
  };

  const electricityTypeFactor = {
    home: 1,
    shop: 1.4,
    industry: 2.2,
  };

  const foodTypeFactor = {
    meat: 3.5,
    vegetarian: 2.0,
    vegan: 1.5,
  };

  const calculateEmission = async () => {
    const transportEmission =
      distance *
      fuelEmissionFactors[fuelType] *
      vehicleTypeFactor[vehicleType] *
      (1 + vehicleAge * 0.01);

    const energyEmission =
      electricityUsage * electricityTypeFactor[electricityType];

    const foodEmission = foodTypeFactor[foodType] * foodDays;

    const total = transportEmission + energyEmission + foodEmission;

    setResult(total.toFixed(2));

    const suggestions = [];
    if (fuelType === "diesel") suggestions.push("💡 Switch from diesel to CNG or electric.");
    if (vehicleAge > 10) suggestions.push("🛠️ Old vehicle? Consider upgrading or regular servicing.");
    if (electricityType === "industry" || energyEmission > 10) suggestions.push("⚡ High energy usage – shift to renewables.");
    if (foodType === "meat") suggestions.push("🥗 Try going vegetarian a few days per week.");
    if (total < 5) suggestions.push("🌱 Excellent! Your footprint is very low.");
    setTips(suggestions);

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/emissions/save",
        {
          transport: transportEmission.toFixed(2),
          energy: energyEmission.toFixed(2),
          food: foodEmission.toFixed(2),
          total: total.toFixed(2),
          date: new Date(),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Emission data saved!");
    } catch (err) {
      console.error(err);
      toast.error("Error saving data.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        🌍 Advanced Emission Calculator
      </h2>

      {/* 🚗 Vehicle Section */}
      <div className="mb-6">
        <label className="block font-semibold">Vehicle Type</label>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          <option value="bike">Bike</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Fuel Type</label>
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
          <option value="electric">Electric</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-semibold">Vehicle Age (yrs)</label>
          <input
            type="number"
            value={vehicleAge}
            onChange={(e) => setVehicleAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Daily Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* ⚡ Electricity */}
      <div className="mb-6">
        <label className="block font-semibold">Electricity Type</label>
        <select
          value={electricityType}
          onChange={(e) => setElectricityType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="home">Home</option>
          <option value="shop">Shop</option>
          <option value="industry">Industry</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Electricity Usage (kWh/day)</label>
        <input
          type="number"
          value={electricityUsage}
          onChange={(e) => setElectricityUsage(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 🍽️ Food */}
      <div className="mb-6">
        <label className="block font-semibold">Food Type</label>
        <select
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="meat">Meat</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Days of Food Consumption</label>
        <input
          type="number"
          value={foodDays}
          onChange={(e) => setFoodDays(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* ✅ Calculate Button */}
      <button
        onClick={calculateEmission}
        className="w-full py-2 mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
      >
        Calculate & Save
      </button>

      {/* 🔍 Results */}
      {result && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Total Emission: {result} kg CO₂
          </h3>
          <ul className="list-disc list-inside text-left text-gray-700">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmissionCalculator;
