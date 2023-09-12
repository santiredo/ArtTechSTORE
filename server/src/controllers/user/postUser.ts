import {User} from "../../db";

export async function postUser(name: string, mail: string, birthDate: string) {
  try {

    const user = await User.findOne({
      where: {
        name: name
      }
    })

    if(user) throw Error('That name is already in use')

    const newUser = await User.create({
      name: name,
      mail: mail,
      birthDate: birthDate,
      admin: false
    });

    
    return newUser
    
  } catch (error) {
    console.error(error);
  }
}
