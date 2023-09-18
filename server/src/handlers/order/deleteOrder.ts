import { deleteOrder } from '../../controllers/Order/deleteOrder';
import { Request, Response } from 'express';

export async function deleteOrderHandler(req: Request, res: Response) {
    try {
      const orderId = parseInt(req.params.id, 10);
      await deleteOrder(orderId)
      return res.status(204).send();
    } catch (error) {
      console.error('Error al eliminar la orden', error);
      return res.status(500).json({ error: 'Error al eliminar la orden' });
    }
  }