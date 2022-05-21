
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ErrorStatus } from "../Errors/ErrorStatus";

interface IPayload{
    sub: string;
}

//Verifica se o usuario é autenticado
export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    
    const authtoken = req.headers.authorization;
    
    if(!authtoken){
        throw new ErrorStatus("Token missing");
    }

    const [ bearer, token ] = authtoken.split(" ");
    
    try {
        const { sub } = verify(token, "45465446f5d65465fdfdf54654f6d46") as IPayload;
        req.user_id = sub;
        return next();
    } catch (err) {
        throw new ErrorStatus("Token missing");
    }

}