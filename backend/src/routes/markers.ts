// Arquivo: backend/src/routes/markers.ts

import express, { Router } from 'express';
import MarkerController from '../controllers/MarkerController';

const router: Router = express.Router();

// Define as rotas
router.get('/markers', MarkerController.getAllMarkers);
router.post('/markers', MarkerController.createMarker);

export default router;
