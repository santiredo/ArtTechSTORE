import { User } from "../../db";

export async function updateUser(userId:number,name:string, password:string) {

    const user = await User.update({
        name,
        password,
    }, { where: { id: userId } });
    return user

}