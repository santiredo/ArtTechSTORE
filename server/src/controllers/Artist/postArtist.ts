import { Artist } from "../../db";

export async function postArtist(name: string, mail: string, password: string, birthDate: string,address:string) {
  try {    
    
    const newArtist = await Artist.create({
      name: name,
      mail: mail,
      password: password,
      birthDate: birthDate,
      address:address,
    });

    
    return newArtist
    
  } catch (error) {
    console.error(error);
  }
}
