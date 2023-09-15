
import { getProducts } from '../../controllers/Product/getProducts';
import { Request, Response } from 'express';


// Manejador para obtener todos los productos
export async function getProductsHandler(req: Request, res: Response) {
    try {
  
      const products = await getProducts();
  
      return res.status(201).json(products);
  
    } catch (error) {
  
      console.error('Error while obtaining products', error);
  
      return res.status(500).json({ error: 'Error while obtaining products' });
    }
  }
  