import { AppDataSource } from "../DataSource";
import { Compliments } from "../entities/Compliments";

export const ComplimentsRepository = AppDataSource.getRepository(Compliments);