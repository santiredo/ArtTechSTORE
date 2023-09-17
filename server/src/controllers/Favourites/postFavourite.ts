import { Favourite } from "../../db";

export async function postFavourite(
  productId: number,
  userId: number
) {
  try {


    const newRelation = await Favourite.create({
        UserId:userId,
        ProductId:productId
    })

    return newRelation

  } catch (error) {

  }
}
