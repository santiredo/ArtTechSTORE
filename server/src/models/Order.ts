import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class orderModel extends Model {
  id!: number;
  userId!: number;
  statusId!: number;
  price!: number;
  address!: string;
}

export default function initializeOrderModel(sequelize: Sequelize): void {
  orderModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      price: {
        type: DataTypes.FLOAT,
        validate: {
          min: 1, 
        },
        allowNull: false, 
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
}
