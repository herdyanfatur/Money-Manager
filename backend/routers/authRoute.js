import express from 'express';
import authController from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/register',authMiddleware.register, authController.register);
router.post('/login', authController.login);

export default router;