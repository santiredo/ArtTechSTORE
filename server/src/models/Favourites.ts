import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export default function initializeFavouritesModel(sequelize: Sequelize): void {
  sequelize.define('Favourite',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      productId: {
        type: DataTypes.INTEGER,
      }
    },
    {
      timestamps: false,
    }
  )
}
