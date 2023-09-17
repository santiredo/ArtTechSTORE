import { Request, Response } from 'express';
import { getOrders } from "../../controllers/Order/getOrders";

export async function getOrderHandler(req: Request, res: Response) {
    try {
      const orderId = parseInt(req.params.id, 10);
      const order = await getOrders(orderId);
  
      return res.status(200).json(order);
    } catch (error) {
      console.error('Error al obtener las ordenes', error);
      return res.status(404).json({ error: 'Ordenes no encontradas' });
    }
  }