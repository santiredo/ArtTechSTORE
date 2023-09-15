import { User } from "../../db";

export async function getAllUserAdmin() {
  const user = await User.findAll({
    paranoid:false,
  });
    if (!user) {
      throw new Error('User not found');
    }
  
    return user;
}