import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

export class ListUserSendComplimitsService{
    async execute(user_id: string){
        const complimints = await ComplimentsRepository.find({
            where:{
                user_sender: user_id
            }
        });

        return complimints;
    }
}