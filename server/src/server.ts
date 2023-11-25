import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index';

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

server.use(express.static('dist', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    },
  }));

server.use(router);

export default server;
