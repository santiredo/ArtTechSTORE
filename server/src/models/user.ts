import { Model, DataTypes } from 'sequelize';
import sequelize from '../routes/dbConnect';

class User extends Model {
    public id!: number;
    public name!: string;
    public mail!: string;
    public password!: string;
    public birthdate!: string;
    public direction!: string;
}

User.init ({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false}
);

export default User;