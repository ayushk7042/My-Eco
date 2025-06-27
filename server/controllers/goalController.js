// server/controllers/goalController.js
import Goal from "../models/Goal.js";

export const createGoal = async (req, res) => {
  try {
    const { goalAmount, targetDate } = req.body;
    const newGoal = new Goal({ userId: req.user.id, goalAmount, targetDate });
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne({ userId: req.user.id });
    if (!goal) return res.status(404).json({ message: "Goal not set" });
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { emissionSaved } = req.body;
    const goal = await Goal.findOne({ userId: req.user.id });
    if (!goal) return res.status(404).json({ message: "Goal not set" });

    goal.currentProgress += emissionSaved;
    await goal.save();

    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
