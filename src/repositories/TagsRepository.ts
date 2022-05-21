import { AppDataSource } from "../DataSource";
import { Tag } from "../entities/Tag";


export const TagsRepository = AppDataSource.getRepository(Tag);