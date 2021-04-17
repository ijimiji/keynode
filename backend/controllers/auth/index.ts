import UserRepository from '../../repositories/UserRepository'
import AuthController from './auth';
import { validationResult } from 'express-validator'
import { secret } from '../../config'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const hash = (password: string) => {
    return bcrypt.hashSync(password, 7)
}
const compare = (password: string, reference: string) => {
    return bcrypt.compareSync(password, reference)
}
const generateAccessToken = (username: string) => {
    const payload = {
        username
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}
const authController: AuthController = new AuthController(
    UserRepository,
    validationResult,
    hash,
    compare,
    generateAccessToken
);

const login = authController.login
const register = authController.register

export {
    login,
    register,
}