// productController.ts
import { productModel } from '../models/Product';

// Controlador para crear un producto
export async function createProduct(newProductData: Partial<productModel>) {
  return productModel.create(newProductData);
}

// Controlador para obtener todos los productos
export async function getProducts() {
  return productModel.findAll();
}

// Controlador para obtener un producto por su ID
export async function getProductById(productId: number) {
  return productModel.findByPk(productId);
}

// Controlador para actualizar un producto por su ID
export async function updateProduct(productId: number, newData: Partial<productModel>) {
  const product = await productModel.findByPk(productId);
  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product.update(newData);
}
