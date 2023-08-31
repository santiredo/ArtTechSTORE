import { DataType, Model } from 'sequelize-typescript';

class Status extends Model {
    id!: number;
    name!: string;
}

export default function initializeStatusModel(sequelize: any): void {
    Status.init(
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false
            }
        },{
            sequelize,
            modelName: 'status'
        }
    )
}
