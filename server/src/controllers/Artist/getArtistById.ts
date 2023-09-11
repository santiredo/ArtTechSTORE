import { Artist } from "../../db";

export async function getArtistById(artistId: number) {
    const artist = await Artist.findByPk(artistId);
  
    if (!artist) {
      throw new Error('Artist not found');
    }
  
    return artist;
  }