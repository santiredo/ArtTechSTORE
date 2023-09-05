import { Request, Response } from 'express';
import { getAllArtist } from '../../controllers/Artist/getAllArtists';


export async function getAllArtistsHandler(req: Request, res: Response) {
    try {
      
      const artists = await getAllArtist();
  
      return res.status(200).json(artists);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: 'Artista no encontrado por nombre' });
    }
  }