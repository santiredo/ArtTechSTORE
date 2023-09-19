import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index';

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://art-tech-store.vercel.app/'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use(router);

export default server;
