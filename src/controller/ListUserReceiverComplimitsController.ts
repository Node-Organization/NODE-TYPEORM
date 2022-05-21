
import { Request, Response } from "express";
import { ListUserReceiveComplimits } from "../service/ListUserReceiveComplimitsService";

export class ListUserReceiverComplimitsController{
    async handle(req: Request, res: Response){
        const { user_id } = req;

        const service = new ListUserReceiveComplimits();

        const complimints = await service.execute(user_id);

        res.json(complimints);
    }
}