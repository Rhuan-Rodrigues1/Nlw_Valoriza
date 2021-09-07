import { Request, Response } from "express";
import { ListUserReceiverComplimentService } from "../services/ListUserReceiverComplimentService";

export class ListUserReceiverComplimentController {
    async handle(request: Request, response: Response){
        const { user_id } = request;

        const listUserReceiverComplimetController = new ListUserReceiverComplimentService();

        const compliments = await listUserReceiverComplimetController.execute(user_id);

        return response.json(compliments)
    }
}