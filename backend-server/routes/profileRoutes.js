// routes/profileRoutes.js
import express from 'express';
import { getUserProfile } from '../controllers/profileController.js';

const router = express.Router();

// Public profile route
router.get('/:username', getUserProfile);

export default router;

