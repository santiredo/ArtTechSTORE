import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';


export default function Product(sequelize: Sequelize): void {
  sequelize.define('Product',
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
        type: DataTypes.STRING
      },
      posted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      auction: {
        type: DataTypes.BOOLEAN
      },
      type: {
        type: DataTypes.ENUM('Painting', '3D Object', 'Drawing')
      },
      technique: {
        type: DataTypes.ENUM('Oil Painting', 'Pencil', 'Watercolor', 'Macrame', 'Ceramics')
      },
      description: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.TEXT
      }
    },
    {
      timestamps: false,
    }
  );
}
