import { ErrorStatus } from "../Errors/ErrorStatus";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UserRepository } from "../repositories/UserRepository";

interface ComplimentsRequest{
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

export class CreateComplimentsService{
    async execute({user_sender, user_receiver, tag_id, message}:ComplimentsRequest){

        if(user_sender === user_receiver){
            throw new ErrorStatus("Incorrect user receiver");
        }
        
        const existsUserReceiver = await UserRepository.findOne({
            where: {
                id: user_receiver
            }
        });

        if(!existsUserReceiver){
            throw new ErrorStatus("User receiver does not exists");
        }

        const compliment = ComplimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await ComplimentsRepository.save(compliment);

        return compliment;
    }
}
	
