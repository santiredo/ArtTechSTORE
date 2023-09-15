import { getAllArtistAdmin } from '../../controllers/Admin/getAllArtist';
import { Request, Response } from 'express';



export async function getAllArtistsAdminHandler(req: Request, res: Response) {
    try {
      
      const artists = await getAllArtistAdmin();
  
      return res.status(200).json(artists);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: 'Artist not found by name' });
    }
  }