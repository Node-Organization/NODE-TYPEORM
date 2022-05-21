
import { AppDataSource } from "../DataSource";
import { User } from "../entities/User";

export const UserRepository = AppDataSource.getRepository(User);