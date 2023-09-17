import { Artist } from "../../db";

// Controlador para obtener todas las creaciones de un artista
export async function getByMailController(mail: string | any) {

  const artist = await Artist.findOne({
    where:{
      mail: mail
    }
  })
 
  return artist

}
