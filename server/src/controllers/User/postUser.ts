import {User} from "../../db";

export async function postUser(email: string, password: string) {
  try {

    const newUser = await User.create({
      email: email,
      password: password,
      admin: false
    });
    
    return newUser
    
  } catch (error) {
    throw error
  }
}