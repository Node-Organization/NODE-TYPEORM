import { UserRepository } from "../repositories/UserRepository";
import { ErrorStatus } from "../Errors/ErrorStatus";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService{
    async execute({email, password}: AuthenticateRequest){

        const user = await UserRepository.findOneBy({email});
        if(!user){
            throw new ErrorStatus("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new ErrorStatus("Email/Password incorrect");
        }

        const token = sign(
        {
            email: user.email
        }, 
        "45465446f5d65465fdfdf54654f6d46", 
        {
            subject: user.id, 
            expiresIn: "1d" //One day expire token
        }
        );

        return token;
        
    }
}