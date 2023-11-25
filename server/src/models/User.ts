import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export default function initializeUserModel(sequelize: Sequelize): void {
  sequelize.define('User', 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
      admin: {
        type: DataTypes.BOOLEAN
      },
      deletedAt:{
        type: DataTypes.DATE,
        allowNull:true,
      }
    },
    {
      paranoid:true,
      timestamps:true,
      createdAt:false,
      updatedAt:false,

    }
  )
}



/* export class User extends Model {
  id!: number;
  name!: string;
  mail!: string;
  password!: string;
  birthDate!: string;
  direction!: string;
  role!: string;
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
        type: DataTypes.STRING,
        validate: {
          isDateFormat(value: string) {
            if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
              throw new Error('The field release must have the format YYYY-MM-DD.');
            }
          }
        }
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
} */
