import { ErrorStatus } from "../Errors/ErrorStatus";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface UserRequest{
    name:     string;
    email:    string;
    password: string;
    admin?:   boolean;
};

export class CreateUserService{
    async execute({ name, email, password, admin = false }:UserRequest){

        if(!email){
            throw new ErrorStatus("Email incorrect");
        }

        const userExists = await UserRepository.findOneBy({email});
        if(userExists){
            throw new ErrorStatus("User already exists");
        }

        const passwordHash = await hash(password, 8);
        
        const user = UserRepository.create({
            admin, 
            name, 
            email, 
            password: passwordHash
        });

        await UserRepository.save(user);

        return user;

    }
}