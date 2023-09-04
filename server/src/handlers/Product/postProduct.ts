
import { createProduct } from '../../controllers/Product/postProduct';
import { Request, Response } from 'express';



export async function createProductHandler(req: Request, res: Response) {
    try {
  
      const { title, price, published, auction, type, technique, description, image } = req.body;
  
  
      const newProduct = await createProduct(title, price, published, auction, type, technique, description, image);//*Revisar que lo que llega del body esta correcto
  
  
      
      res.status(201).json(newProduct);
  
    } catch (error) {
  
      console.error('Error al crear el producto', error);
  
      return res.status(500).json({ error: 'Error al crear el producto' });
  
    }
  }