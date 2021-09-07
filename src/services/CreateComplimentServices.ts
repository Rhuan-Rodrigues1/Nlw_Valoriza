import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface iCompliments{
    tag_id: string;
    user_send: string;
    user_receiver: string;
    message: string;
}

export class CreateComplimentServices{
    async execute({tag_id, user_send, user_receiver, message}: iCompliments){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);
        const userRepositories = getCustomRepository(UserRepositories)

        if(user_receiver === user_send){
            throw new Error("Incorrect User Receiver");
        }
        
        const userReceiverExists = await userRepositories.findOne({id: user_receiver});

        if (!user_receiver) {
            throw new Error("User Receiver does not exists !");
        }

        const compliment = complimentRepositories.create({tag_id, user_receiver, user_send, message});
        await complimentRepositories.save(compliment);

        return compliment;
    }

}