import { Request, Response } from 'express';
import { postArtist } from '../../controllers/Artist/postArtist';
import { Artist } from "../../db";


export async function postArtistHandler(req: Request, res: Response) {

  try {

    const { mail, password } = req.body;
      
    const artist = await postArtist(mail, password);

    return res.status(201).json(artist);
    
  } catch (error) {
    return res.status(500).json(error)
  }

}