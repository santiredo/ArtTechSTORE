import { getAllUserAdmin } from '../../controllers/Admin/getAllUser';
import { Request, Response } from 'express';




export async function getAllUserAdminHandler(req: Request, res: Response) {
    try {
      
      const user = await getAllUserAdmin();
  
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: 'Users not found' });
    }
  }