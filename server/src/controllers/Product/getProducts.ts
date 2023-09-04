import { Product } from "../../db";


// Controlador para obtener todos los productos
export async function getProducts() {
    return Product.findAll();
  }