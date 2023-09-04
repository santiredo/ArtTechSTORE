
import { getProductById } from '../../controllers/Product/getById';
import { Request, Response } from 'express';


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