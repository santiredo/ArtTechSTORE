import { Request, Response } from 'express';
import { updateUser } from '../../controllers/user/updateUser';
import { User } from "../../db";

export async function updateUserHandler(req: Request, res: Response) {
    const {id}=req.params;
    const userId = Number(id);
    let { name, password } = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (user) {
          if(!name){
            name= await user.get('name');
          }
          
          if(!password){
            password=await user.get('password');
          }
        const updatedUser=await updateUser(userId, name, password );

        return res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
}