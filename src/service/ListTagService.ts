

import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from 'class-transformer';

export class ListTagService{
    async execute(){
        
        const tags = await TagsRepository.find();

        return classToPlain(tags);
    }
}