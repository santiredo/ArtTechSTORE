import {User} from '../../db'

export async function deleteUser(userId: number) {
    const user = await User.findByPk(userId);
  
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    if(user.isSoftDeleted()){
      user.update({
        deletedAt:formattedDate
      })
      await user.save();
      return "The user was succesfully eliminated.";
    }
    else{
      return "The user was not succesfully eliminated";
    }
  }