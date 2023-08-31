import { DataType, Model } from 'sequelize-typescript';

class User extends Model {
    id!: number;
    name!: string;
    mail!: string;
    password!: string;
    birthDate!: string;
    direction!: string;
}

export default function initializeUserModel(sequelize: any): void {
    User.init(
        {
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataType.STRING
            },
            mail: {
                type: DataType.STRING
            },
            password: {
                type: DataType.STRING
            },
            birthDate: {
                type: DataType.DATEONLY
            },
            direction: {
                type: DataType.STRING
            }
        },{
            sequelize,
            modelName: 'user'
        }
    )
}
