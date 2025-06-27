import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPlantForm = ({ editPlant, onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    scientificName: '',
    co2Absorption: '',
    region: '',
    lifespan: '',
    benefits: ''
  });

  useEffect(() => {
    if (editPlant) setForm(editPlant);
  }, [editPlant]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = editPlant
      ? `http://localhost:5000/api/plants/${editPlant._id}`
      : 'http://localhost:5000/api/plants';
    const method = editPlant ? 'put' : 'post';

    try {
      await axios[method](url, form);
      onSuccess();
      setForm({ name: '', scientificName: '', co2Absorption: '', region: '', lifespan: '', benefits: '' });
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">{editPlant ? 'Edit' : 'Add'} Plant</h2>
      {['name', 'scientificName', 'region', 'lifespan', 'benefits', 'co2Absorption'].map(field => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field}
          className="w-full p-2 mb-3 border rounded"
        />
      ))}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {editPlant ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default AdminPlantForm;
