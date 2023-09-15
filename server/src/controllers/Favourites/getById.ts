import { Favourite } from "../../db";

export async function getFavouritesById(UserId: number) {

    const favourites = await Favourite.findAll({
        where: {
            UserId
        }
    })

    return favourites
}