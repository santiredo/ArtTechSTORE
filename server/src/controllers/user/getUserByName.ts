import { User } from "../../models/User";

export async function getUserByName(userName: string) {
    const user = await User.findByPk(userName);
  
    if (!user) {
      throw new Error('Favorito no encontrado');
    }
  
    return user;
  }