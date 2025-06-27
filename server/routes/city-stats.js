// routes/cityStats.js
import express from 'express';
import axios from 'axios';
const router = express.Router();
const API_KEY = process.env.AIR_QUALITY_API_KEY;

router.get('/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const response = await axios.get('https://api.api-ninjas.com/v1/airquality', {
      params: { city },
      headers: { 'X-Api-Key': API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
