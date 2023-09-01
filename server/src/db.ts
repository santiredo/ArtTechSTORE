import { Sequelize, ModelCtor } from 'sequelize-typescript';
import 'dotenv/config';

import fs from 'fs'
import path from 'path'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: Number(DB_PORT), // Convertir a número, ya que normalmente está en formato de cadena
    database: 'artists',
    logging: false,
    native: false,
});

const basename = path.basename(__filename)

const modelDefiners: ((sequelize: Sequelize) => void)[] = [];;

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
});

modelDefiners.forEach((model: any) => model.default(sequelize))
let entries = Object.entries(sequelize.models)

const capitalizedModels: { [key: string]: ModelCtor<any>} = {}
entries.forEach(([modelName, model]) => {
    const capitalizedModelName = modelName.charAt(0).toUpperCase() + modelName.slice(1)
    capitalizedModels[capitalizedModelName] = model as ModelCtor<any>;
})

export { sequelize };
