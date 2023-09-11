import { Request, Response } from 'express';
import {  } from '../../controllers/Artist/getArtistById';
import { getByNameController } from '../../controllers/Artist/getArtistByName';

// Manejador para obtener las creaciones de un artista
export async function getArtistByName(req: Request, res: Response) {

  
  try {
    
    const {name} = req.query

    const artists = await getByNameController(name)


    return res.status(200).json(artists);

  } catch (error) {
    console.error('Error al obtener las creaciones del artista', error);
    return res.status(500).json({ error: 'Error al obtener las creaciones del artista' });
  }
}
