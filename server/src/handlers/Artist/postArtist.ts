import { Request, Response } from 'express';
import { postArtist } from '../../controllers/Artist/postArtist';
import { Artist } from "../../db";


export async function postArtistHandler(req: Request, res: Response) {

  try {

    const { name, mail, password, birthDate,address } = req.body;
    const findArtist = await Artist.findAll({ where: { name: name } });
    
    if (findArtist.length != 0) {
        return res.status(404).send("El nombre ya esta en uso");
    }
      
    const artist = await postArtist(name, mail, password, birthDate ,address);

    console.log(artist)
    return res.status(201).json(artist);
    
  } catch (error) {
    return res.status(500).json(error)
  }

}