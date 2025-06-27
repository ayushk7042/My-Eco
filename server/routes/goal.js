// server/routes/goal.js
// import express from "express";
// import { createGoal, getGoal, updateProgress } from "../controllers/goalController.js";
// import verifyToken from "../middleware/verifyToken.js";

// const router = express.Router();

// router.post("/", verifyToken, createGoal);
// router.get("/", verifyToken, getGoal);
// router.put("/progress", verifyToken, updateProgress);

// export default router;
import express from "express";
import Goal from "../models/Goal.js";
import verifyToken from "../middleware/verifyToken.js";
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

// Create new goal
router.post("/", verifyToken, async (req, res) => {
  try {
    const goal = new Goal({ ...req.body, userId: req.user.id });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user goals
router.get("/", verifyToken, async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/set", authMiddleware, async (req, res) => {
  const { goalAmount, month } = req.body;
  const goal = new Goal({ user: req.user.id, goalAmount, month });
  await goal.save();
  res.json({ message: "Goal saved" });
});

// Update goal status
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
