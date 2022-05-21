import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

//Verifica se o usuario é admin
export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    
    const { user_id } = req;

    const { admin } = await UserRepository.findOne({
        where: {
            id: user_id
        }
    });

    if(admin){
        return next();
    }

    return res.status(401).json({error: "Unauthorized"});
}