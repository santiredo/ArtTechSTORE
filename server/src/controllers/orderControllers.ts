// orderController.ts
import { Order } from '../models/order';

// Controlador para crear una orden
export async function createOrder(userId: number, statusId: number, price: number, address: string) {
  return Order.create({ userId, statusId, price, address });
}

// Controlador para obtener todas las órdenes
export async function getOrders() {
  return Order.findAll();
}

// Controlador para obtener una orden por su ID
export async function getOrderById(orderId: number) {
  return Order.findByPk(orderId);
}

// Controlador para actualizar una orden por su ID
export async function updateOrder(orderId: number, newData: Partial<Order>) {
  const order = await Order.findByPk(orderId);
  if (!order) {
    throw new Error('Orden no encontrada');
  }

  return order.update(newData);
}

// Controlador para eliminar una orden por su ID
export async function deleteOrder(orderId: number) {
  const order = await Order.findByPk(orderId);
  if (!order) {
    throw new Error('Orden no encontrada');
  }

  await order.destroy();
}
