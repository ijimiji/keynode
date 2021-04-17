import jwt from 'jsonwebtoken'
import AuthMiddleware from './auth'
import {secret} from '../../config'

const authMiddleware = new AuthMiddleware(jwt.verify, secret)
const authenticate = authMiddleware.authenticate

export default authenticate
