import {Artist} from '../../db'

export async function deleteArtist(artistId: number) {
    const artist = await Artist.findByPk(artistId);
  
    if (!artist) {
      throw new Error('Artist not found');
    }
  
    await artist.destroy();
  }