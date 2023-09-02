import { Order } from "../../models/Order";

export async function getOrders(orderId: number) {
    const orders = await Order.findByPk(orderId);
  
    if (!orders) {
      throw new Error('Orden no encontrado');
    }
  
    return orders;
  }