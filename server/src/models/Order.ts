import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize-typescript";


export default function initializeOrderModel(sequelize: Sequelize): void {
  
  sequelize.define('Order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      price:{
        type: DataTypes.FLOAT,
        validate: {
        min: 1, 
        },
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
}
