import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class User extends Model {
  id!: number;
  name!: string;
  mail!: string;
  password!: string;
  birthDate!: string;
  direction!: string;
  role!: 'Admi' | 'Seller' | 'Buyer';
}

export default function initializeUserModel(sequelize: Sequelize): void {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      mail: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      birthDate: {
        type: DataTypes.DATEONLY
      },
      direction: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.ENUM('Admin', 'Seller', 'Buyer'),
        allowNull: false,
        defaultValue: 'Buyer', // Establece el valor predeterminado del rol
      },
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
}
