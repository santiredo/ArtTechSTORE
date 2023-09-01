import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class Product extends Model {
  id!: number;
  title!: string;
  price!: number;
  published!: string;
  posted!: boolean;
  bet!: boolean;
  type!: string;
  technique!: string;
  description!: string;
  image!: string;
}

export default function initializeProductModel(sequelize: Sequelize): void {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        validate: {
          min: 1 //Valor mínimo
        }
      },
      published: {
        type: DataTypes.DATEONLY
      },
      posted: {
        type: DataTypes.BOOLEAN
      },
      bet: {
        type: DataTypes.BOOLEAN
      },
      type: {
        type: DataTypes.ENUM('Pintura', 'Escultura', 'Dibujo')
      },
      technique: {
        type: DataTypes.ENUM('Oleo', 'Lapiz')
      },
      description: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'Product'
    }
  );
}
