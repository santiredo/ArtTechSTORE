import { Artist } from "../../db";

export async function getArtistById(artistId: number) {
    const artist = await Artist.findByPk(artistId, {
      attributes: ['name', 'image'], 
    });
  
    if (!artist) {
      throw new Error('Artist not found');
    }
  
    return artist;
  }