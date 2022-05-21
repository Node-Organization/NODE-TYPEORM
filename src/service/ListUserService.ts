import { UserRepository } from "../repositories/UserRepository";


export class ListUserService{
    async execute(){
        const users = await UserRepository.find();
        return users;
    }
}