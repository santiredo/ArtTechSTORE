import { Product } from "../../db";

export async function deleteProduct(productId: number) {



  const deletedProduct = await Product.findByPk(productId)

  if (!deletedProduct) {
    throw new Error('Producto no encontrado');
  }

  deletedProduct.update({
    posted:false,
  })

  await deletedProduct.save();


  return deletedProduct;

}