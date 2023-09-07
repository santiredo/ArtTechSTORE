import { Request, Response } from 'express';
import { postUser } from '../../controllers/User/postUser';
import { User } from '../../db';


export async function postUserHandler(req: Request, res: Response) {

  try {

    const { name, mail, password, birthDate } = req.body;

    const findUser = await User.findAll({ where: { name: name } });
    
    if (findUser.length != 0) {
        return res.status(404).send("El nombre ya esta en uso");
    }
    const user = await postUser(name, mail, password, birthDate);

    console.log(user)
    res.status(201).json(user);
    
  } catch (error) {
    res.status(500).json(error)
  }

}