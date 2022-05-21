
import { Request, Response } from "express";
import { ListUserSendComplimitsService } from "../service/ListUserSendComplimitsService";

export class ListUserSendComplimitsController{
    async handle(req: Request, res: Response){

        const { user_id } = req;

        const service = new ListUserSendComplimitsService();

        const complimints = await service.execute(user_id);

        res.json(complimints);
    }
}