import { User } from "../../models/User";

export async function getUserById(userId: number) {
    const user = await User.findByPk(userId);
  
    if (!user) {
      throw new Error('Favorito no encontrado');
    }
  
    return user;
  }