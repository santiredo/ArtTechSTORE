// productController.ts
import { Product } from '../models/Product';

// Controlador para crear un producto
export async function createProduct(newProductData: Partial<Product>) {
  return Product.create(newProductData);
}

// Controlador para obtener todos los productos
export async function getProducts() {
  return Product.findAll();
}

// Controlador para obtener un producto por su ID
export async function getProductById(productId: number) {
  return Product.findByPk(productId);
}

// Controlador para actualizar un producto por su ID
export async function updateProduct(productId: number, newData: Partial<Product>) {
  const product = await Product.findByPk(productId);
  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product.update(newData);
}
