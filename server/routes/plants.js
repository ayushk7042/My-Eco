import express from 'express';
import Plant from '../models/Plant.js';

const router = express.Router();


// POST /api/plants (Add new plant)
router.post('/', async (req, res) => {
  const { name, scientificName, co2Absorption, region, lifespan, benefits } = req.body;

  try {
    const plant = new Plant({ name, scientificName, co2Absorption, region, lifespan, benefits });
    await plant.save();
    res.status(201).json(plant);
  } catch (err) {
    res.status(500).json({ error: 'Error adding plant data' });
  }
});

// PUT /api/plants/:id (Edit plant)
router.put('/:id', async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plant);
  } catch (err) {
    res.status(500).json({ error: 'Error updating plant data' });
  }
});

// GET top 10 plants sorted by co2 absorption
router.get('/top', async (req, res) => {
  try {
    const plants = await Plant.find().sort({ co2Absorption: -1 }).limit(10);
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching plants', error });
  }
});

// POST to add a new plant
router.post('/add', async (req, res) => {
  try {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    res.status(201).json({ message: 'Plant added successfully', plant: newPlant });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add plant', details: err });
  }
});

export default router;
