import { register, login } from '../controllers/auth'
import express from 'express';
const { check } = require('express-validator')
const router = express.Router();

router.post('/login', login)
router.post('/register',
    [
        check('username', "Username cant be empty").notEmpty(),
        check('password', "Password cant be shorter than 8 chars").isLength({ min: 8, max: 100 }),
    ],
    register)

export default router
