import { Request, Response } from 'express';
import { getFavourite } from '../controllers/getFavourite';

// Manejador para obtener un favorito por su ID
export async function getFavouriteHandler(req: Request, res: Response) {
  try {
    const favouriteId = parseInt(req.params.id, 10);
    const favourite = await getFavourite(favouriteId);

    return res.status(200).json(favourite);
  } catch (error) {
    console.error('Error al obtener el favorito', error);
    return res.status(404).json({ error: 'Favorito no encontrado' });
  }
}