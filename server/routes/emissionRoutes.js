import express from 'express';
import { getUserEmissions, addEmission } from '../controllers/emissionController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

// GET emissions by user
router.get('/', verifyToken, getUserEmissions);

// POST new emission data
router.post('/add', verifyToken, addEmission);

export default router;
