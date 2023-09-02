import { Favourite } from '../models/Favourites';

// Controlador para crear un nuevo favorito
export async function createFavourite(data: any) {
  // Aquí, 'data' debería ser un objeto que contiene los detalles del nuevo favorito
  // Por ejemplo, { userId: 1, productId: 2 }
  
  const favourite = await Favourite.create(data);
  return favourite;
}