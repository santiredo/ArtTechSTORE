import {User} from "../../db";

export async function postUser(name: string, mail: string, password: string, birthDate: string) {
  try {

    const newUser = await User.create({
      name: name.toLocaleLowerCase(),
      mail: mail,
      password: password,
      birthDate: birthDate,
      admin: false
    });

    
    return newUser
    
  } catch (error) {
    console.error(error);
  }
}
