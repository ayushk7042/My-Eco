import Emission from '../models/Emission.js';

export const getUserEmissions = async (req, res) => {
  try {
    const emissions = await Emission.find({ userId: req.user.id }).sort({ date: 1 });
    res.json(emissions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch emissions" });
  }
};

export const addEmission = async (req, res) => {
  try {
    const { electricity, transport, food, waste, totalEmission } = req.body;

    const newEmission = new Emission({
      userId: req.user.id,
      electricity,
      transport,
      food,
      waste,
      totalEmission,
      date: new Date()
    });

    await newEmission.save();
    res.status(201).json(newEmission);
  } catch (err) {
    res.status(500).json({ error: "Failed to save emission" });
  }
};
