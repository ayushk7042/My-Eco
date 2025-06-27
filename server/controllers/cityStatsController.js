// server/controllers/cityStatsController.js
export const getCityEmission = async (req, res) => {
  const city = req.params.city;

  // Dummy average CO₂ data per city (kg per day)
  const cityEmissionData = {
    Delhi: 110,
    Mumbai: 100,
    Bangalore: 95,
    Kolkata: 105,
    Chennai: 97,
    Hyderabad: 92,
    Pune: 90,
    Jaipur: 88,
    Ahmedabad: 85,
    default: 95,
  };

  // const emission = dummyData[city] || dummyData["default"];
  //res.json({ emission });
//const emission = cityEmissionData[city] || cityEmissionData["default"];
  //res.json({ city, emission });
    const emission = cityEmissionData[city] || cityEmissionData["default"];
  res.json({ city, emission, allCities: cityEmissionData });
};
