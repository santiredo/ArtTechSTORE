
import { Request, Response } from 'express';
import { updateProduct } from '../../controllers/Product/updateProduct';


export async function updateProductHandler(req: Request, res: Response) {
    try {
  
      const {id} = req.params
  
      const {price} = req.body
  
      const numberId = Number(id)
      console.log(numberId, price)
  
      const updatedProduct = await updateProduct(numberId, price)
  
      console.log(updatedProduct)
  
      return res.status(200).json(updatedProduct)
    } catch (error) {
      console.error('Error al actualizar el producto', error);
      return res.status(500).json({ error: 'Error al actualizar el producto' });
    }
  }