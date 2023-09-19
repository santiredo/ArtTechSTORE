import { Order } from "../../db";
import { User } from "../../db";

export async function postOrder(price:number, address: string, userId: number) {
    const ID = await User.findOne({
      where : {
        id : userId
      }
    })
    const order = await Order.create({price, address, UserId : ID!.dataValues.id});
    return order;
  }