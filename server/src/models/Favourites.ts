import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class Favourite extends Model {
 
  id!: number;
  userId!: number;
  productId!: number;
}

export default function initializeFavouritesModel(sequelize: Sequelize): void {
  Favourite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,        
        
      },
      productId: {
        type: DataTypes.INTEGER,
        
      }
    },
    {
      sequelize,
      modelName: 'Favourite'
    }
  );
}
