import { Request, Response } from 'express';
import { postUser } from '../../controllers/user/postUser';

export async function postUserHandler(req: Request, res: Response) {
    try {
        const { name, mail, password } = req.body;
        if(!name || !mail || !password){
          throw Error('Falta informacion para crear el usuario');
        }
        const user = await postUser(name, mail, password);
        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json({ message: 'Error al crear el usuario' });
      }
    }