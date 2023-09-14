import { User, Product, Favourite } from "../../db";

export async function postFavourite(
  productId: number,
  userId: number
) {
  try {

    const user = await User.findByPk(userId)
    const product = await Product.findByPk(productId)

    !user && Error('User not found')
    !product && Error('Product not found')

    const newRelation = await Favourite.create({
        userId,
        productId
    })

    return newRelation

  } catch (error) {

  }
}
