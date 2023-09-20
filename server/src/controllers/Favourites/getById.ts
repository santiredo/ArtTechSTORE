import { Favourite, Product } from "../../db";

export async function getFavouritesById(UserId: number) {

    const userFavourites = await Favourite.findAll({
        where: {
            UserId
        }
    })

    return userFavourites
}