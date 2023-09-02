import { Favourite } from '../models/Favourites'; // Asegúrate de importar el modelo correctamente

// Controlador para eliminar un favorito por su ID
export async function deleteFavourite(favouriteId: number) {
  const favourite = await Favourite.findByPk(favouriteId);

  if (!favourite) {
    throw new Error('Favorito no encontrado');
  }

  await favourite.destroy();
}