import { getProductsAdmin } from '../../controllers/Admin/getAllProducts';
import { Request, Response } from 'express';


// Manejador para obtener todos los productos
export async function getProductsAdminHandler(req: Request, res: Response) {
    try {
  
      const products = await getProductsAdmin();
  
      return res.status(201).json(products);
  
    } catch (error) {
  
      console.error('Error while obtaining products', error);
  
      return res.status(500).json({ error: 'Error while obtaining products' });
    }
  }
  