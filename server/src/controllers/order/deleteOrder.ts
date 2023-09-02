import { Order } from "../../models/Order"

export async function deleteOrder(orderId: number) {
    const order = await Order.findByPk(orderId);
  
    if (!order) {
      throw new Error('Orden no encontrado');
    }
  
    await order.destroy();
  }