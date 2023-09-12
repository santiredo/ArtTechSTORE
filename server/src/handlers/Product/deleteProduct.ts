
import { deleteProduct } from '../../controllers/Product/deleteProduct';
import { Request, Response } from 'express';


// Manejador para actualizar un producto por su ID


export async function deleteProductHandler(req: Request, res: Response) {
  try {

    const productId = parseInt(req.params.id, 10);

    const deletedProduct = await deleteProduct(productId);
    console.log("Sali",deletedProduct);
    await deletedProduct.save();
    return res.status(201).json(deletedProduct); // 204 significa "No Content" (sin contenido)

  } catch (error) {

    console.error('Error al eliminar el producto', error);

    return res.status(500).json({ error: (error as Error).message });
  }
}
