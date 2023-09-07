import { Request, Response } from 'express';
import { postOrder } from "../../controllers/order/postOrder";

export async function createOrderHandler(req: Request, res: Response) {
    try {
  ////////////////////REVISAR/////////////////

      const { userId, statusId, price, address } = req.body;  
      const order = await postOrder(userId, statusId, price, address);
  
      return res.status(200).json(order);
    } catch (error) {
      console.error('Error al crear la orden', error);
      return res.status(500).json({ error: 'Error al crear la orden' });
    }
  }