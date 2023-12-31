import {Artist} from '../../db'

export async function deleteArtist(artistId: number) {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
    const artist = await Artist.findByPk(artistId);
  
    if (!artist) {
      throw new Error('Artist not found');
    }
  
    await artist.destroy();
    if(artist.isSoftDeleted()){
      artist.update({
        deletedAt:formattedDate
      })
      await artist.save();
      return "The artist was succesfully eliminated.";
    }
    else{
      return "The artist was not succesfully eliminated";
    }
  }