import { DataType, Model } from 'sequelize-typescript';

class Product extends Model {
    id!: number;
    title!: string;
    price!: number;
    published!: boolean;
    posted!: boolean;
    bet!: boolean;
    type!: string;
    technique!: string;
    description!: string;
    image!: string;
}

export default function initializeProductModel(sequelize: any): void {
    Product.init(
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataType.STRING,
                allowNull: false
            },
            price: {
                type: DataType.FLOAT,
                validate: {
                    min: 1 //Valor minimo
                },
            },
            published: {
                type: DataType.DATEONLY
            },
            posted: {
                type: DataType.BOOLEAN
            },
            bet: {
                type: DataType.BOOLEAN
            },
            type: {
                type: DataType.ENUM('Pintura', 'Escultura', 'Dibujo')
            },
            technique: {
                type: DataType.ENUM('Oleo', 'Lapiz')
            },
            description: {
                type: DataType.TEXT
            },
            image: {
                type: DataType.TEXT
            }
        },
        {
            sequelize,
            modelName: 'product'
        }
    )
}
