import { Order } from "../../db";


export async function updateOrder(orderId:number, statusId:number) {
    const updatedOrder = await Order.findByPk(orderId)

    updatedOrder!.dataValues.statusId = statusId

    await updatedOrder?.save()

    return updatedOrder
}