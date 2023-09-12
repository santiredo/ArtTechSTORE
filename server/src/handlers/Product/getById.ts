
import { getProductById } from '../../controllers/Product/getById';
import { Request, Response } from 'express';


// Manejador para obtener un producto por su ID
export async function getProductByIdHandler(req: Request, res: Response) {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = await getProductById(productId);
  
      if (!product) {
        throw Error('Producto no encontrado')
      }

      console.log(product)
  
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }