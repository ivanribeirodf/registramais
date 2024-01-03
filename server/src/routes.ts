import { Router } from 'express'

import { CreateUserController } from './controllers/CreateUserController';
import { AuthUserController } from './controllers/AuthUserController';
import { DetailUserController } from './controllers/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/inforUser', isAuthenticated, new DetailUserController().handle)

export { router}