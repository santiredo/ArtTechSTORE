import { Request, Response } from 'express';
import { getOrders } from "../../controllers/Order/getOrders";

export async function getOrderHandler(req: Request, res: Response) {
    try {
      const order = await getOrders();

      return res.status(200).json(order);
    } catch (error) {
      console.error('Error al obtener las ordenes', error);
      return res.status(404).json({ error: 'Ordenes no encontradas' });
    }
  }