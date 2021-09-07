import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";

export class CreateTagServices{
    async execute(name: string){
        const tagRepositories = getCustomRepository(TagRepositories);

        if(!name){
            throw new Error("Incorrect name");
        }

        const tagsAlreadyExists = await tagRepositories.findOne({ name });

        if (tagsAlreadyExists) {
            throw new Error("Tag already exists");            
        }

        const tag = tagRepositories.create({ name });

        await tagRepositories.save(tag);

        
        return tag;
    }
}