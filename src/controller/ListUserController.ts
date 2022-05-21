import { Request, Response } from "express";
import { ListUserService } from "../service/ListUserService";



export class ListUserController{
    async handle(req: Request, res: Response){
        const service = new ListUserService();
        const users = await service.execute();
        return res.json(users);
    }
}