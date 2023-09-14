import { Favourite } from "../../db";

export async function getFavouritesById(userId: number) {

    const favourites = await Favourite.findAll({
        where: {
            userId
        }
    })

    return favourites
}