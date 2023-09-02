import { Request, Response } from 'express';
import { getUserById } from '../../controllers/user/getUserById';

export async function getUserByIdHandler(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await getUserById(userId);
  
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error al obtener el usuario por id', error);
      return res.status(404).json({ error: 'Usuario no encontrado por id' });
    }
  }