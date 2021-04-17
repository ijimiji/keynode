import UserRepository from '../../repositories/UserRepository'
import UserController from './user';

const userController: UserController = new UserController(UserRepository);
const getAll = userController.getAll
const post = userController.post
const update = userController.update
const updateCPM = userController.updateCPM

export {
    getAll,
    post,
    update,
    updateCPM
}