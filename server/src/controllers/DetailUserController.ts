import { Request, Response } from "express";
import { DetailUserService } from "../services/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const detailUserServer = new DetailUserService();
    const user = await detailUserServer.execute(user_id);
    
    return res.json(user)
  }
}

export { DetailUserController }