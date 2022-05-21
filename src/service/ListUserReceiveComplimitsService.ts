
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

export class ListUserReceiveComplimits{
    async execute(user_id: string){
        const complimints = await ComplimentsRepository.find({
            where:{
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return complimints;
    }
}