// orderHandler.ts
import { Request, Response } from 'express';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/orderControllers';


// Manejador para crear una orden
export async function createOrderHandler(req: Request, res: Response) {
  try {
    const { userId, statusId, price, address } = req.body;
    const order = await createOrder(userId, statusId, price, address);
    return res.status(201).json(order);
  } catch (error) {
    console.error('Error al crear la orden', error);
    return res.status(500).json({ error: 'Error al crear la orden' });
  }
}

// Manejador para obtener todas las órdenes
export async function getOrdersHandler(req: Request, res: Response) {
  try {
    const orders = await getOrders();
    return res.json(orders);
  } catch (error) {
    console.error('Error al obtener las órdenes', error);
    return res.status(500).json({ error: 'Error al obtener las órdenes' });
  }
}

// Manejador para obtener una orden por su ID
export async function getOrderByIdHandler(req: Request, res: Response) {
  try {
    const orderId = parseInt(req.params.id, 10);
    const order = await getOrderById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    return res.json(order);
  } catch (error) {
    console.error('Error al obtener la orden', error);
    return res.status(500).json({ error: 'Error al obtener la orden' });
  }
}

// Manejador para actualizar una orden por su ID
export async function updateOrderHandler(req: Request, res: Response) {
  try {
    const orderId = parseInt(req.params.id, 10);
    const newData = req.body;
    const updatedOrder = await updateOrder(orderId, newData);
    return res.json(updatedOrder);
  } catch (error) {
    console.error('Error al actualizar la orden', error);
    return res.status(500).json({ error: 'Error al actualizar la orden' });
  }
}

// Manejador para eliminar una orden por su ID
export async function deleteOrderHandler(req: Request, res: Response) {
  try {
    const orderId = parseInt(req.params.id, 10);
    await deleteOrder(orderId);
    return res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar la orden', error);
    return res.status(500).json({ error: 'Error al eliminar la orden' });
  }
}
