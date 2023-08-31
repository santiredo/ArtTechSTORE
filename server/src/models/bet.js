import { DataTypes } from 'sequelize';

export default (sequelize) => {
    sequelize.define('bet', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};