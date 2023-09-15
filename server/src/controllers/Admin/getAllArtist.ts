import { Artist } from "../../db";

export async function getAllArtistAdmin() {
  const artists = await Artist.findAll({
    paranoid:false
  });
  
    if (!artists) {
      throw new Error('Artists not found');
    }
  
    return artists;
}