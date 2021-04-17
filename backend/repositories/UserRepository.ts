import BaseRepository from "./base/BaseRepository";
import User from "../entities/user"

import mongoose from 'mongoose'
const UserModel = require('./models/user')

class UserRepository extends BaseRepository<User>{
}

export default new UserRepository(mongoose, 'User')