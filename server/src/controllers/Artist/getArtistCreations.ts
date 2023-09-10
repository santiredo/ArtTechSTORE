import { Artist, Product } from "../../db";

// Controlador para obtener todas las creaciones de un artista
export async function getArtistCreations(artistId: number) {
  return Artist.findByPk(artistId, {
    include: Product, // Incluye las creaciones relacionadas con el artista
  });
}
