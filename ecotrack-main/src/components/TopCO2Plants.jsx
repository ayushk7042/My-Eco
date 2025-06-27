import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const sampleData = [
  {
    name: 'Peepal Tree',
    scientificName: 'Ficus religiosa',
    co2Absorption: 21.77,
    lifespan: '100+ years',
    region: 'India',
    benefit: 'Also purifies benzene, formaldehyde',
  },
  {
    name: 'Neem Tree',
    scientificName: 'Azadirachta indica',
    co2Absorption: 20.23,
    lifespan: '150+ years',
    region: 'India, Tropics',
    benefit: 'Medicinal & air-purifying properties',
  },
  {
    name: 'Banyan Tree',
    scientificName: 'Ficus benghalensis',
    co2Absorption: 18.4,
    lifespan: '200+ years',
    region: 'India',
    benefit: 'Massive canopy, excellent for urban cooling',
  },
  {
    name: 'Arjuna Tree',
    scientificName: 'Terminalia arjuna',
    co2Absorption: 15.2,
    lifespan: '60-80 years',
    region: 'India (riverbanks)',
    benefit: 'Known for stabilizing river banks & soil',
  },
  {
    name: 'Ashoka Tree',
    scientificName: 'Saraca asoca',
    co2Absorption: 13.5,
    lifespan: '60 years',
    region: 'South Asia',
    benefit: 'Reduces noise & pollution',
  },
  {
    name: 'Mango Tree',
    scientificName: 'Mangifera indica',
    co2Absorption: 12.8,
    lifespan: '100 years',
    region: 'Tropical & Subtropical',
    benefit: 'Provides fruit and shade',
  },
  {
    name: 'Saptaparni',
    scientificName: 'Alstonia scholaris',
    co2Absorption: 12.1,
    lifespan: '40–60 years',
    region: 'India, SE Asia',
    benefit: 'Medicinal & used in Ayurveda',
  },
  {
    name: 'Indian Almond',
    scientificName: 'Terminalia catappa',
    co2Absorption: 11.4,
    lifespan: '60+ years',
    region: 'Coastal Asia',
    benefit: 'Excellent for shoreline protection',
  },
  {
    name: 'Karanj Tree',
    scientificName: 'Pongamia pinnata',
    co2Absorption: 10.9,
    lifespan: '70 years',
    region: 'India',
    benefit: 'Used for biodiesel & reforestation',
  },
  {
    name: 'Teak Tree',
    scientificName: 'Tectona grandis',
    co2Absorption: 9.7,
    lifespan: '80+ years',
    region: 'South Asia',
    benefit: 'Strong carbon sink & timber source',
  }
];

const COLORS = ['#34D399', '#60A5FA', '#F59E0B', '#EF4444', '#10B981', '#A78BFA', '#F472B6', '#FCD34D', '#38BDF8', '#8B5CF6'];

const TopCO2Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // You can later fetch from backend: /api/plants/top
    setPlants(sampleData);
  }, []);

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌿 Top CO₂ Absorbing Plants (India)</h1>

      {/* 📋 Plant Details Table */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-green-100">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Scientific Name</th>
              <th className="py-3 px-4 text-left">CO₂ Absorbed (kg/year)</th>
              <th className="py-3 px-4 text-left">Lifespan</th>
              <th className="py-3 px-4 text-left">Region</th>
              <th className="py-3 px-4 text-left">Benefits</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-green-50">
                <td className="py-2 px-4">{plant.name}</td>
                <td className="py-2 px-4 italic">{plant.scientificName}</td>
                <td className="py-2 px-4">{plant.co2Absorption}</td>
                <td className="py-2 px-4">{plant.lifespan}</td>
                <td className="py-2 px-4">{plant.region}</td>
                <td className="py-2 px-4 text-sm text-gray-600">{plant.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📊 Bar Chart Comparison */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">CO₂ Absorption Comparison</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={plants}>
            <XAxis dataKey="name" angle={-35} textAnchor="end" interval={0} height={80} />
            <YAxis label={{ value: "kg/year", angle: -90, position: "insideLeft" }} />
            <Tooltip
              formatter={(value, name, props) => [
                `${value} kg CO₂/year`,
                props.payload.benefit || "Benefit",
              ]}
            />
            <Bar dataKey="co2Absorption">
              {plants.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopCO2Plants;
