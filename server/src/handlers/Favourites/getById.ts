import { getFavouritesById } from '../../controllers/Favourites/getById';
import { Request, Response } from 'express';

export async function getFavouritesByIdHandler(req: Request, res: Response) {
    try {
    
        const {userId} = req.body

        const favourites = await getFavouritesById(userId)
        
        return res.status(200).json(favourites);

    } catch (error) {
        throw error
    }
  }