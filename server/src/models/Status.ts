import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export default function initializeStatusModel(sequelize: Sequelize): void {
  sequelize.define('Status',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
    },
    {
      timestamps: false,
    }
  )
}
