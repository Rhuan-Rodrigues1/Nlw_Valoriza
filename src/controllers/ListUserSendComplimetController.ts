import { Request, Response } from "express";
import { ListUserSendComplimentService } from "../services/ListUserSendComplimentService";

export class ListUserSendComplimentController {
    async handle(request: Request, response: Response){
        const { user_id } = request;

        const listUserSendComplimetController = new ListUserSendComplimentService();

        const compliments = await listUserSendComplimetController.execute(user_id);

        return response.json(compliments)
    }
}