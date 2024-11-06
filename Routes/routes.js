// routes/authRoutes.js
import express from 'express';
import { signup, login} from '../Controller/Authentication Controller/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;