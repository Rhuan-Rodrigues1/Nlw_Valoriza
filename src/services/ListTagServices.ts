import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

export class ListTagServices {
    async execute(){
        const tagRepositories = getCustomRepository(TagRepositories);
        
        const tags = await tagRepositories.find();

        return classToPlain(tags);
    }
}