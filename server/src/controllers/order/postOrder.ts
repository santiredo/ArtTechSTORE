import { Order } from "../../models/Order";

export async function postOrder(userId: number, statusId:number, price:number, address: string) {

    const order = await Order.create({userId, statusId, price, address});
    return order;
  }