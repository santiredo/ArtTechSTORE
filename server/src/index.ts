import express from 'express';
import { Express, Request, Response} from 'express';

const app: Express = express();
// const app = express();
const port = 3001;
app.get('/', (req: Request, res: Response) => {
  res.send('Estas es la página principal del servidor ArtTechStore');
});
app.listen(port, () => {
   console.log(`servidor is listening on ${port}`);
});