
import { deleteProduct } from '../../controllers/Product/deleteProduct';
import { Request, Response } from 'express';


// Manejador para actualizar un producto por su ID


export async function deleteProductHandler(req: Request, res: Response) {
  try {
    const productId = parseInt(req.params.id, 10);
    await deleteProduct(productId);
    return res.status(204).send(); // 204 significa "No Content" (sin contenido)
  } catch (error) {
    console.error('Error al eliminar el producto', error);
    return res.status(500).json({ error: 'Error al eliminar el producto' });
  }
}
