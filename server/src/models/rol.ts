import { DataType, Model } from 'sequelize-typescript';

class Rol extends Model {
    id!: number;
    name!: string;
}

export default function initializeRolModel(sequelize: any): void {
    Rol.init(
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
            modelName: 'rol'
        }
    )
}
