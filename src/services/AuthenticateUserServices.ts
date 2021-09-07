import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface IAuthenticate{
    email: string;
    password: string
}

export class AuthenticateUserServices {
    async execute({ email, password }: IAuthenticate){
        const userRepositories = getCustomRepository(UserRepositories);
        
        const user = await userRepositories.findOne({ email })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = compare(password, (await user).password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = sign({ email: user.email }, "2eabf957728a7cea0bd6b375c0e534cb", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}
