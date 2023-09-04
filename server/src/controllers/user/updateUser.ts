import { User } from "../../db";

export async function updateUser(name:any, password:any) {

    const user = await User.update( name, password )
    return user

}