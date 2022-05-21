import { Request, Response } from "express";
import { CreateComplimentsService } from "../service/CreateComplimentsService";

export class CreateComplimentsController{
    async handle(req: Request, res: Response){
        
        const { user_receiver, tag_id, message } = req.body;
        const { user_id } = req;

        const service = new CreateComplimentsService();

        const compliment = await service.execute(
            { 
                user_sender: user_id, 
                user_receiver, 
                tag_id, message 
            }
        );

        res.json(compliment);
    }
}