import { Product } from "../../db";
import { Artist } from "../../db";

export async function getArtistById(artistId: number) {
  
    const artist = await Artist.findByPk(artistId);
  
    const creations = await Product.findAll({
      where: {
        ArtistId: artistId
      }
    })

    if (!artist) {
      throw new Error('Artist not found');
    }
  
    return {...artist.dataValues, products: [...creations]};
  }