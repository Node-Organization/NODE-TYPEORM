import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

export class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, password, admin } = req.body;

        const service = new CreateUserService();

        const result = await service.execute({ name, email, password, admin });

        return res.status(201).json(result);
    }
}