import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class productModel extends Model {
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

export default function Product(sequelize: Sequelize): void {
  productModel.init(
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
        type: DataTypes.ENUM('Painting', '3D Object', 'Drawing')
      },
      technique: {
        type: DataTypes.ENUM('Oil painting', 'Pencil', 'Watercolor', 'Macrame', 'Ceramics')
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
