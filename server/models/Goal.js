// server/models/Goal.js
import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  goalAmount: {
    type: Number,
    required: true,
  },
  currentProgress: {
    type: Number,
    default: 0,
  },
  targetDate: {
    type: Date,
    required: true,
  },
   targetEmission: { type: Number, required: true },
  deadline: { type: Date, required: true },
  achieved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Goal", goalSchema);
