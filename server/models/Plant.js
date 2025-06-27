import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String },
  co2Absorption: { type: Number }, // in kg/year
  lifespan: { type: String },
  region: { type: String },
  benefits: { type: String },
});

export default mongoose.model('Plant', plantSchema);
