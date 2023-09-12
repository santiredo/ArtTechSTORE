import { Request, Response } from 'express';
import { getUserByMail } from '../../controllers/User/getUserByMail';

export async function getUserByMailHandler(req: Request, res: Response) {
    try {
      const {mail}= req.query;
      
      const user = await getUserByMail(mail as string);

      return res.status(200).json(user)

    } catch (error) {
      console.error('Error while trying to obtain user by mail', error);
      return res.status(404).json({ error: 'User not found by mail' });
    }
  }