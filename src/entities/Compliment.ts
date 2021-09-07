import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
export class Compliment{

    @PrimaryColumn()
    readonly id: string

    @Column()
    user_send: string

    @JoinColumn({name: "user_send"})
    @ManyToOne(() => User)
    userSend: User


    @Column()
    user_receiver: string

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag

    @Column()
    message: string 

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}