import { Request, Response } from 'express';
import { postOrder } from "../../controllers/Order/postOrder";

export async function createOrderHandler(req: Request, res: Response) {
    try {
  ////////////////////REVISAR/////////////////

      const {price, address } = req.body;
      const {id} = req.params
      const userId = Number(id)
      
      const order = await postOrder (price, address, userId);
  
      return res.status(200).json(order);
    } catch (error) {
      console.error('Error al crear la orden', error);
      return res.status(500).json({ error: 'Error al crear la orden' });
    }
  }