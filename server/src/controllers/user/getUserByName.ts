import { User } from "../../db";
export async function getUserByName(name: string) {
  const user = await User.findAll();
  const userFound = user.filter((username: any) => username.name.toLowerCase() === name.toLowerCase());
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
  
    return userFound;
}