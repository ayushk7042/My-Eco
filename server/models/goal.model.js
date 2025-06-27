import mongoose from "mongoose";
const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  goalAmount: Number,
  month: String
});
export default mongoose.model("Goal", goalSchema);
