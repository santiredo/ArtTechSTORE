
import { createProduct } from '../../controllers/Product/postProduct';
import { Request, Response } from 'express';



export async function createProductHandler(req: Request, res: Response) {

    try {

      const { title, price, type, technique, description, image, ArtistId } = req.body;
  
      const newProduct = await createProduct(title, price, type, technique, description, image, ArtistId);//*Revisar que lo que llega del body esta correcto
      
      res.status(201).json(newProduct);
  
    } catch (error) {
  
      console.error('Error al crear el producto', error);
  
      return res.status(500).json({ error: 'Error al crear el producto' });
  
    }
  }