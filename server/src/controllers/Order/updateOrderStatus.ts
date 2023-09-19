import { Order } from "../../db";


export async function updateOrder(orderId:number) {
    const updatedOrder = await Order.findByPk(orderId)

    updatedOrder!.update ({
        statusId : 1
    })

    await updatedOrder?.save()

    return updatedOrder
}