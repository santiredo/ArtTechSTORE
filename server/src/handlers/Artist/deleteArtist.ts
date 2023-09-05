import { Request, Response } from 'express'
import { deleteArtist } from '../../controllers/Artist/deleteArtist';

export async function deleteArtistHandler (req:Request, res: Response){
    try{
        const {id} = req.params;
        const artistId = Number(id);
        const artistaDeleted=await deleteArtist(artistId)
        return res.status(200).send(artistaDeleted)
    } catch (error) {
        console.error('Error al eliminar el artista')
        return res.status(500).json({error: 'Error al eliminar el artista'});
    }
}