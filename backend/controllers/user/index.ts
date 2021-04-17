import UserRepository from '../../repositories/UserRepository'
import UserController from './user';

const userController: UserController = new UserController(UserRepository);
const updateCPM = userController.updateCPM

export {
    updateCPM
}