import { Router } from "express";

import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentsController } from "./controller/CreateComplimentsController";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ListTagController } from "./controller/ListTagController";
import { ListUserController } from "./controller/ListUserController";
import { ListUserReceiverComplimitsController } from "./controller/ListUserReceiverComplimitsController";
import { ListUserSendComplimitsController } from "./controller/ListUserSendComplimitsController";

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

export const router = Router();

router.post('/users',               new CreateUserController().handle);
router.get('/users',                ensureAuthenticated, new ListUserController().handle);
router.post('/login',               new AuthenticateUserController().handle);
router.get('/tags',                 ensureAuthenticated, new ListTagController().handle);
router.post('/tags',                ensureAuthenticated, ensureAdmin, new CreateTagController().handle);
router.post('/compliments',         ensureAuthenticated, new CreateComplimentsController().handle);
router.get('/compliments/send',     ensureAuthenticated, new ListUserSendComplimitsController().handle);
router.get('/compliments/receiver', ensureAuthenticated, new ListUserReceiverComplimitsController().handle);