import { Request, Response, response} from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response){
    const { firstname, lastname, email, password} = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      firstname,
      lastname,
      email,
      password
    });
    return res.json(user)
  }
}

export { CreateUserController }