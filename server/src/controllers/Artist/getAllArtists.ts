import { Artist } from "../../db";

export async function getAllArtist() {
  const artists = await Artist.findAll({
    attributes: ['name', 'image'], 
  });
  
    if (!artists) {
      throw new Error('Artistas no encontrado');
    }
  
    return artists;
}