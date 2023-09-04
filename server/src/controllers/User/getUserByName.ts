import { User } from "../../db";

export async function getUserByName(name: string) {
  const user = await User.findAll();
  const userFound = user.filter((username: any) => username.name.toLowerCase() === name.toLowerCase());
    console.log("Este es el usuario",user);
    console.log("Este es el otro usuario",userFound);
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
  
    return user;
}