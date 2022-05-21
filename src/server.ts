import "reflect-metadata";
import "./DataSource";

import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import { router } from "./routes";
import { ErrorStatus } from "./Errors/ErrorStatus";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: ErrorStatus, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof ErrorStatus){
        return res.status(err.status).json({error: err.mensagem});
    }

    return res.status(500).json({status: "error", messsage: "Internal server error"});
});

app.listen(3000, () => console.log('SERVIDOR INICIADO!!!'));