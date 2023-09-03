import { User } from "../../db";

export async function getUserByName(userName: string) {
    const user = await User.findByPk(userName);
  
    if (!user) {
      throw new Error('Favorito no encontrado');
    }
  
    return user;
}