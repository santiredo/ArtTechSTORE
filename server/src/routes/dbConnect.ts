import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
});

export default sequelize;