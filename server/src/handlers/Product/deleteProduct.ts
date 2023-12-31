
import { deleteProduct } from '../../controllers/Product/deleteProduct';
import { Request, Response } from 'express';


// Manejador para actualizar un producto por su ID


export async function deleteProductHandler(req: Request, res: Response) {
  try {

    const productId = parseInt(req.params.id, 10);

    const deletedProduct = await deleteProduct(productId);
    
    return res.status(201).send(deletedProduct); // 204 significa "No Content" (sin contenido)

  } catch (error) {

    console.error('Error to eliminate the product', error);

    return res.status(500).json({ error: (error as Error).message });
  }
}
