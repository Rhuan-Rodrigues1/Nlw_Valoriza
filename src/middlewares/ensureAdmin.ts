import { Response, Request, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { user_id } = request;

    const userRepositories = getCustomRepository(UserRepositories);

    const { admin } = await userRepositories.findOne(user_id);

    if (admin) {
        return next;
    }

    return response.status(400).json({
        error: "Unauthorized"
    })
}