import {User} from "../../db";

export async function postUser(name: string, mail: string, password: string, birthDate: string, direction: string, role: string) {
  try {

    const newUser = await User.create({
      name: name,
      mail: mail,
      password: password,
      birthDate: birthDate,
      direction: direction,
      role: role
    });

    
    return newUser
    
  } catch (error) {
    console.error(error);
  }
}
