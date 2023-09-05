import { Request, Response } from 'express';
import { Artist } from "../../db";
import { updateArtist } from '../../controllers/Artist/updateArtist';

export async function updateArtistHandler(req: Request, res: Response) {
    const {id} = req.params;
    const artistId = Number(id);
    let { name,password } = req.body;
    
    try {
      const artist = await Artist.findByPk(artistId);
      
      if (artist) {
        if(!name){
          name= await artist.get('name');
        }
        
        if(!password){
          password=await artist.get('password');
        }
        const updatedArtist=await updateArtist( artistId,name ,password);
        console.log("El nuevo artista es", updatedArtist);
        
        res.status(200).json(updatedArtist);
      } else {
        res.status(404).json({ message: 'Artist not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el artista' });
    }
  };