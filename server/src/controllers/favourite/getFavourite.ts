import { Favourite } from '../models/Favourites'; // Asegúrate de importar el modelo correctamente

// Controlador para obtener un favorito por su ID
export async function getFavourite(favouriteId: number) {
  const favourite = await Favourite.findByPk(favouriteId);

  if (!favourite) {
    throw new Error('Favorito no encontrado');
  }

  return favourite;
}