import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { getCustomRepository } from "typeorm";

export class ListUserSendComplimentService {
    async execute(user_id: string){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);
        
        const compliments = await complimentRepositories.find({
            where: {
                user_send: user_id
            },
            relations: ["userSend", "userReceiver", "tag"]
        });

        return compliments;
    }
}