// // // // import express from "express";

// // // // const router = express.Router();

// // // // // Static city-wise CO₂ emission data (in kg CO₂ per capita annually)
// // // // const cityData = [
// // // //   { city: "Delhi", averageEmission: 1900 },
// // // //   { city: "Mumbai", averageEmission: 1800 },
// // // //   { city: "Bengaluru", averageEmission: 1600 },
// // // //   { city: "Kolkata", averageEmission: 1700 },
// // // //   { city: "Chennai", averageEmission: 1500 },
// // // //   { city: "Pune", averageEmission: 1550 },
// // // //   { city: "Hyderabad", averageEmission: 1650 },
// // // // ];

// // // // router.get("/", (req, res) => {
// // // //   res.json(cityData);
// // // // });

// // // // export default router;
// // // import express from 'express';
// // // import axios from 'axios';
// // // const router = express.Router();

// // // // Mock City Emission Data (you can use a database or API later)
// // // const cityEmissions = {
// // //   "Delhi": 310,
// // //   "Mumbai": 280,
// // //   "Bangalore": 270,
// // //   "Kolkata": 250,
// // //   "Chennai": 230,
// // //   "Pune": 220,
// // //   "Hyderabad": 240
// // // };

// // // // API to get emission data based on city name
// // // router.get("/:city", (req, res) => {
// // //   const city = req.params.city;
// // //   const emission = cityEmissions[city] || null;
// // //   if (emission) {
// // //     res.json({ city, emission });
// // //   } else {
// // //     res.status(404).json({ error: "City data not found" });
// // //   }
// // // });

// // // export default router;
// // // server/routes/cityStats.js
// // import express from 'express';
// // import { getCityEmission } from '../controllers/cityStatsController.js';

// // const router = express.Router();

// // // Route to get city-wise CO₂ emission data
// // router.get('/:city', getCityEmission);

// // export default router;
import express from 'express';
import axios from 'axios';
const router = express.Router();

// Example Ambee API (requires API key)
router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const [aqRes, co2Res] = await Promise.all([
      axios.get(`https://api.ambeedata.com/latest/by-city?city=${city}`, {
        headers: { 'x-api-key': process.env.AMBEE_API_KEY }
      }),
      axios.get(`https://carbon-monitor-cities.p.rapidapi.com/v1/co2?city=${city}`, {
        headers: {
          'x-rapidapi-host': 'carbon-monitor-cities.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPIDAPI_KEY
        }
      })
    ]);

    res.json({
      city,
      aqi: aqRes.data[0] || null,
      co2: co2Res.data || null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'City stats fetch error' });
  }
});

export default router;
// routes/cityStats.js
// import express from 'express';
// import axios from 'axios';
// const router = express.Router();
// const API_KEY = process.env.AIR_QUALITY_API_KEY;

// router.get('/:city', async (req, res) => {
//   try {
//     const city = req.params.city;
//     const response = await axios.get('https://api.api-ninjas.com/v1/airquality', {
//       params: { city },
//       headers: { 'X-Api-Key': API_KEY }
//     });
//     res.json(response.data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
