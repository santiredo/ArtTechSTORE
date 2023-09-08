import { Artist } from "../../db";

export async function postArtist(
  name: string, 
  mail: string, 
  password: string, 
  birthDate: string,
  location:string, 
  image: string
  ){ 
  try {    
    
    const newArtist = await Artist.create({
      name: name,
      mail: mail,
      password: password,
      birthDate: birthDate,
      location:location,
      image: image
    });

    
    return newArtist
    
  } catch (error) {
    console.error(error);
  }
}
