import { Request, Response } from "express";
import { CreateComplimentServices } from "../services/CreateComplimentServices";


export class CreateComplimentController{
    async hanlde(request: Request, response: Response){
        const {tag_id, user_receiver, message} = request.body;
        const { user_id } = request;
        const createComplimentsServices = new CreateComplimentServices();

        const compliment = await createComplimentsServices.execute({tag_id, user_send: user_id, user_receiver, message});

        response.json(compliment);

    }
}