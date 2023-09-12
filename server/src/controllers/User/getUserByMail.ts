import { User } from "../../db";

export async function getUserByMail(mail: string) {

    console.log(mail)

    const user = await User.findOne({
        where:{
            mail:mail
        }
    });
  
    return user;
}