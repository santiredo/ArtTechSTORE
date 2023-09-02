// productHandler.ts
import { Request, Response } from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
} from '../controllers/productController';

// Manejador para crear un producto
export async function createProductHandler(req: Request, res: Response) {
  try {
    const newProductData = req.body;
    const newProduct = await createProduct(newProductData);//*Revisar que lo que llega del body esta correcto
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear el producto', error);
    return res.status(500).json({ error: 'Error al crear el producto' });
  }
}

// Manejador para obtener todos los productos
export async function getProductsHandler(req: Request, res: Response) {
  try {
    const products = await getProducts();
    return res.json(products);
  } catch (error) {
    console.error('Error al obtener los productos', error);
    return res.status(500).json({ error: 'Error al obtener los productos' });
  }
}

// Manejador para obtener un producto por su ID
export async function getProductByIdHandler(req: Request, res: Response) {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await getProductById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    return res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto', error);
    return res.status(500).json({ error: 'Error al obtener el producto' });
  }
}

// Manejador para actualizar un producto por su ID
export async function updateProductHandler(req: Request, res: Response) {
  try {
    const productId = parseInt(req.params.id, 10);
    const newData = req.body;
    const updatedProduct = await updateProduct(productId, newData);
    return res.json(updatedProduct);
  } catch (error) {
    console.error('Error al actualizar el producto', error);
    return res.status(500).json({ error: 'Error al actualizar el producto' });
  }
}
