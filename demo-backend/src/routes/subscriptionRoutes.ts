// src/routes/subscriptionRoutes.ts

import express from 'express';
import { submitReceipt, getSubscription } from '../controllers/subscriptionController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/submit-receipt', protect, submitReceipt);
router.get('/getsubscription', protect, getSubscription);

export default router;
