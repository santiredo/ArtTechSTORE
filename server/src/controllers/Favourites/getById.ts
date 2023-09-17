import { Favourite, Product } from "../../db";

export async function getFavouritesById(UserId: number) {

    const userFavourites = await Favourite.findAll({
        where: {
            UserId
        }
    })

    const favourites = userFavourites.map(async(fav) => {
        return await Product.findByPk(fav.dataValues.ProductId)
    })

    return favourites
}