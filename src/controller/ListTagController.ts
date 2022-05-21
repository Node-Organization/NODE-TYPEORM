import { Request, Response } from "express";
import { ListTagService } from "../service/ListTagService";

export class ListTagController{
    async handle(req: Request, res: Response){
        const service = new ListTagService();

        const tags = await service.execute();

        return res.json(tags);
    }
}