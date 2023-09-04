import { Product } from "../../db";

export async function deleteProduct(productId: number) {
  const product = await Product.findByPk(productId);
  if (!product) {
    throw new Error('Product no encontrado');
  }

  return product.destroy();
}