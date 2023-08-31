import { DataType, Model } from 'sequelize-typescript';

class Bet extends Model {
    id!: number;
    name!: string;
}

export default function initializeBetModel(sequelize: any): void {
    Bet.init(
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataType.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'bet', // Nombre de la tabla
        }
    );
}