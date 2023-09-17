import { getArtistById } from '../../controllers/Artist/getArtistById';
import { Request, Response } from 'express';

export async function getArtistByIdHandler(req: Request, res: Response) {
    try {
      const {id} = req.params
      const artistId=Number(id);
      const artist = await getArtistById(artistId);
  
      return res.status(200).json(artist);
    } catch (error) {
      console.error('Error al obtener el artista por id');
      return res.status(404).json({ error: 'Artista no encontrado por id' });
    }
  }