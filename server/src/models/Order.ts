import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export class Order extends Model {
  id!: number;
}

export default function initializeOrderModel(sequelize: Sequelize): void {
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId:{
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      statusId:{
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      price:{
        type: DataTypes.FLOAT,
      },
      address:{
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
}
