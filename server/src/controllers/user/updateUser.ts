import { User } from "../../models/User";

export async function updateUser(name:any, password:any) {

    const user = await User.update( name, password )
    return user

}