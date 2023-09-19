import { Order } from "../../db";

export async function getOrders() {
    const orders = await Order.findAll();

    if (!orders) {
      throw new Error('Orden no encontrado');
    }
  
    return orders;
  }