import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class Status extends Model {
  id!: number;
  name!: string;
}

export default function initializeStatusModel(sequelize: Sequelize): void {
  Status.init(
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
      sequelize,
      modelName: 'Status',
    }
  );
}
