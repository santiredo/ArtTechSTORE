import { Request, Response } from 'express';
import { postUser } from '../../controllers/User/postUser';


export async function postUserHandler(req: Request, res: Response) {

  try {

    const { name, mail, birthDate } = req.body;


    const user = await postUser(name, mail, birthDate);

    res.status(201).json(user);
    
  } catch (error) {
    res.status(500).json(error)
  }

}