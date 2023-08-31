import express from 'express';
import sequelize from './routes/dbConnect';
//import User  from './models/user';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import indexRoutes from './routes/index';

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: true })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });


const port = 3000;
app.listen(port, () => {
    console.log(`servidor is listening on ${port}`);
});