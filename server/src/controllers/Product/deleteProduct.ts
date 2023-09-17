import { Product } from "../../db";

export async function deleteProduct(productId: number) {

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const deletedProduct = await Product.findByPk(productId)

  if (!deletedProduct) {
    throw new Error('Product not found');
  }

  await deletedProduct.destroy();

  if(deletedProduct.isSoftDeleted()){
    deletedProduct.update({
      deletedAt:formattedDate
    })
    await deletedProduct.save();
    return "The product was succesfully eliminated.";
  }
  else{
    return "The product was not succesfully eliminated";
  }

}