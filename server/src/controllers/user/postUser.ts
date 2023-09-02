import { User } from "../../models/User";

export async function postUser(name:any, mail:any, password:any) {

    const newUser = await User.create({ name, mail,password })
    return newUser

}