import { getFavouritesById } from '../../controllers/Favourites/getById';
import { Request, Response } from 'express';

export async function getFavouritesByIdHandler(req: Request, res: Response) {

    try {
    
        const {id} = req.params

        const favourites = await getFavouritesById(Number(id))

        
        return res.status(200).json(favourites);

    } catch (error) {
        throw error
    }
  }