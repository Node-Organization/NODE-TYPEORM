import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

export class CreateTagController{
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const service = new CreateTagService();

        const result = await service.execute({ name });

        return res.status(201).json(result);
    }
}