import { Request, Response } from 'express';
import { deleteFavourite } from '../../controllers/favourite/deleteFavourite'; 

// Manejador para eliminar un favorito por su ID
export async function deleteFavouriteHandler(req: Request, res: Response) {
  try {
    const favouriteId = parseInt(req.params.id, 10);
    await deleteFavourite(favouriteId);
    return res.status(204).send(); // 204 significa "No Content" (sin contenido)
  } catch (error) {
    console.error('Error al eliminar el favorito', error);
    return res.status(500).json({ error: 'Error al eliminar el favorito' });
  }
}