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
      rating:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      type: {
        type: DataTypes.ENUM('Painting', '3D Object', 'Drawing')
      },
      technique: {
        type: DataTypes.JSONB
      },
      description: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      deletedAt:{
        type:DataTypes.DATE,
        allowNull: true,
      }
    },
    
    {
      paranoid:true,
      timestamps:true,
      createdAt:false,
      updatedAt:false,
    },
    
  );
 
  
}
