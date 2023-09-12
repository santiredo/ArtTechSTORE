import { User } from "../../db";

export async function getUserByMail(mail: string) {

    const user = await User.findOne({
        where:{
            mail:mail
        }
    });
  
    return user;

}