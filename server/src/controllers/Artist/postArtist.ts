import { Artist } from "../../db";


export async function postArtist(mail: string, password: string){ 
  
  try {
    
    const newArtist = await Artist.create({
      mail: mail,
      password: password,
    });
    
    return newArtist
    
  } catch (error) {
    console.error(error);
  }

}
