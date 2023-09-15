import { Favourite } from "../../db";

export const deleteFavourite = async (favId: number) => {

  const favourite = await Favourite.findByPk(favId);

  if (!favourite) {
    throw new Error("Favorito no encontrado");
  }

  return await favourite.destroy();
};
