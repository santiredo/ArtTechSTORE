import { Request, Response } from 'express';
import {  } from '../../controllers/Artist/getArtistById';
import { getByMailController } from '../../controllers/Artist/getArtistByMail';

// Manejador para obtener las creaciones de un artista
export async function getArtistByMail(req: Request, res: Response) {

  
  try {
    
    const {mail} = req.query

    const artists = await getByMailController(mail)

    return res.status(200).json(artists);

  } catch (error) {
    console.error('Error al obtener las creaciones del artista', error);
    return res.status(500).json({ error: 'Error al obtener las creaciones del artista' });
  }
}