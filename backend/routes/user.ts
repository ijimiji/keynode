import {getAll, post, update, updateCPM} from '../controllers/user'
import authMiddleware from '../middleware/auth'
import express from 'express';

const router = express.Router();

router.post('/cpm', authMiddleware, updateCPM)

export default router
