import { Request, Response } from 'express';
import { getArtistCreations } from '../../controllers/Artist/getArtistCreations';

// Manejador para obtener las creaciones de un artista
export async function getArtistCreationsHandler(req: Request, res: Response) {
  try {
    const artistId = parseInt(req.params.id); // Supongamos que el ID del artista se pasa como parámetro en la URL

    if (!artistId || isNaN(artistId)) {
      return res.status(400).json({ error: 'ID de artista no válido' });
    }

    const artistCreations = await getArtistCreations(artistId);

    if (!artistCreations) {
      return res.status(404).json({ error: 'Artista no encontrado' });
    }

    return res.status(200).json(artistCreations);
  } catch (error) {
    console.error('Error al obtener las creaciones del artista', error);
    return res.status(500).json({ error: 'Error al obtener las creaciones del artista' });
  }
}
