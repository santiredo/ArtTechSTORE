import { Product } from "../../db"

// Controlador para actualizar un producto por su ID
export async function updateProduct(numberId:number, rating:number) {

    const updatedProduct = await Product.findByPk(numberId)
  
   updatedProduct!.update({
    rating: rating,
    posted:true
   })
  
   await updatedProduct?.save()
  
   return updatedProduct
  
  }