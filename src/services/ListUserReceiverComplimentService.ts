import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { getCustomRepository } from "typeorm";

export class ListUserReceiverComplimentService {
    async execute(user_id: string){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSend", "userReceiver", "tag"]
        });

        return compliments;
    }
}