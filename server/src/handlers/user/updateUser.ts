import { Request, Response } from 'express';
import { updateUser } from '../../controllers/user/updateUser';
import { User } from '../../models/User';

export async function updateUserHandler(req: Request, res: Response) {
    const userId = req.params.id;
    const { name, email } = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (user) {
        await updateUser( name, email );
        res.json(user);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  };