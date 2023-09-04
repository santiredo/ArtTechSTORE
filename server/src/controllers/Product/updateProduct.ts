import { Product } from "../../db"

// Controlador para actualizar un producto por su ID
export async function updateProduct(numberId:number, price:number) {

    const updatedProduct = await Product.findByPk(numberId)
  
   updatedProduct!.dataValues.price = price
  
   await updatedProduct?.save()
  
   return updatedProduct
  
  }