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

      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statusId:{
        type: DataTypes.INTEGER,
        allowNull: false,
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
