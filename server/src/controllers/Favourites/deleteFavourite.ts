import { Favourite } from "../../db";

export const deleteFavourite = async (id: string) => {

  const deletedFavourite = await Favourite.findByPk(id);

  if (!deletedFavourite) {
    throw new Error("Favorito no encontrado");
  }

  await deletedFavourite.destroy();
};
