import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPlantForm from './AdminPlantForm';

const AdminPanel = () => {
  const [plants, setPlants] = useState([]);
  const [editingPlant, setEditingPlant] = useState(null);

  const fetchPlants = async () => {
    const res = await axios.get('http://localhost:5000/api/plants');
    setPlants(res.data);
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div className="p-6">
      <AdminPlantForm editPlant={editingPlant} onSuccess={fetchPlants} />
      <h3 className="mt-6 text-lg font-semibold">All Plants</h3>
      <ul className="space-y-2 mt-4">
        {plants.map(plant => (
          <li key={plant._id} className="border p-4 rounded flex justify-between">
            <div>
              <p><strong>{plant.name}</strong> ({plant.scientificName})</p>
              <p>{plant.region} | CO₂: {plant.co2Absorption}kg/year</p>
            </div>
            <button
              onClick={() => setEditingPlant(plant)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
