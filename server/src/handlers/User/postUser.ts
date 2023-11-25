import { Request, Response } from 'express';
import { postUser } from '../../controllers/User/postUser';


export async function postUserHandler(req: Request, res: Response) {

  console.log('Hola')

  try {

    const { email, password } = req.body;

    console.log('Hola como estas')

    const user = await postUser(email, password);

    res.status(201).json(user);
    
  } catch (error) {
    res.status(500).json(error)
  }

}