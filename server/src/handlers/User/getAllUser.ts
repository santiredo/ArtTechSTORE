import { Request, Response } from 'express';
import { getAllUser } from '../../controllers/User/getAllUser';



export async function getAllUserHandler(req: Request, res: Response) {
    try {
      
      const user = await getAllUser();
  
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: 'Users not found' });
    }
  }