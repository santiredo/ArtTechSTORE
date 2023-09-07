import { Request, Response } from 'express';
import { getUserByName } from '../../controllers/user/getUserByName';

export async function getUserByNameHandler(req: Request, res: Response) {
    try {
      const {name}= req.query;
      console.log("Esto es el nombre",name);
      
      const user = await getUserByName(name as string);
  
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error al obtener el usuario por nombre', error);
      return res.status(404).json({ error: 'Usuario no encontrado por nombre' });
    }
  }