import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface iUser {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

export class CreateUserServices {
    async execute({ name, email, admin = false, password }: iUser){
        const userRepositories = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email Invalid");
        }

        const userAlreadyExists = await userRepositories.findOne({ email });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = userRepositories.create({ name, email, admin, password: passwordHash });

        await userRepositories.save(user);

        return user;
    }
}

