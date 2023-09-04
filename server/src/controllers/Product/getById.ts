import { Product } from "../../db";

// Controlador para obtener un producto por su ID
export async function getProductById(productId: number) {
    return Product.findByPk(productId);
  }
  