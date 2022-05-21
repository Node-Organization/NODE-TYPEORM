import { ErrorStatus } from "../Errors/ErrorStatus";
import { TagsRepository } from "../repositories/TagsRepository";

interface TagsRequest {
    name: string;
}

export class CreateTagService{
    async execute({ name }: TagsRequest){

        if(!name){
            throw new ErrorStatus("Incorrect name!");
        }

        const tagExists = await TagsRepository.findOneBy({ name });
        
        if(tagExists){
            throw new ErrorStatus("Tag already exists");
        }

        const tag = TagsRepository.create({ name });

        await TagsRepository.save(tag);

        return tag;
    }
}