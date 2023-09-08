import { User } from "../../db";

export async function getAllUser() {
  const user = await User.findAll();
    if (!user) {
      throw new Error('User not found');
    }
  
    return user;
}