import { Request, Response } from 'express';
import { postUser } from '../../controllers/user/postUser';


export async function postUserHandler(req: Request, res: Response) {

  try {

    const { name, mail, password, birthDate, direction, role } = req.body;

      
    const user = await postUser(name, mail, password, birthDate, direction, role);

    console.log(user)
    res.status(201).json(user);
    
  } catch (error) {
    res.status(500).json(error)
  }

}