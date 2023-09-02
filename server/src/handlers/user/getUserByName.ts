import { Request, Response } from 'express';
import { getUserByName } from '../../controllers/user/getUserByName';

export async function getUserByNameHandler(req: Request, res: Response) {
    try {
      const userName = req.params.name;
      const user = await getUserByName(userName);
  
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error al obtener el usuario por nombre', error);
      return res.status(404).json({ error: 'Usuario no encontrado por nombre' });
    }
  }