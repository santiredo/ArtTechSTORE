import { User } from "../../db";

export async function getUserByMail(mail: string) {
  const user = await User.findAll();
  const userFound = user.filter((username: any) => username.mail.toLowerCase() === mail.toLowerCase());
    console.log("Este es el usuario que encontro",userFound);
  
    return userFound;
}