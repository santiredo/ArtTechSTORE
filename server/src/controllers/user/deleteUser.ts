import {User} from '../../models/User'

export async function deleteUser(userId: number) {
    const user = await User.findByPk(userId);
  
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
  
    await user.destroy();
  }