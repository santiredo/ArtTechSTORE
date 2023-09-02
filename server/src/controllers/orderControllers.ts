// orderController.ts
import { orderModel } from '../models/Order';

// Controlador para crear una orden
export async function createOrder(userId: number, statusId: number, price: number, address: string) {
  return orderModel.create({ userId, statusId, price, address });
}

// Controlador para obtener todas las órdenes
export async function getOrders() {
  return orderModel.findAll();
}

// Controlador para obtener una orden por su ID
export async function getOrderById(orderId: number) {
  return orderModel.findByPk(orderId);
}

// Controlador para actualizar una orden por su ID
export async function updateOrder(orderId: number, newData: Partial<orderModel>) {
  const order = await orderModel.findByPk(orderId);
  if (!order) {
    throw new Error('Orden no encontrada');
  }

  return order.update(newData);
}

// Controlador para eliminar una orden por su ID
export async function deleteOrder(orderId: number) {
  const order = await orderModel.findByPk(orderId);
  if (!order) {
    throw new Error('Orden no encontrada');
  }

  await order.destroy();
}
