import { postFavourite } from "../../controllers/Favourites/postFavourite";
import { Request, Response } from "express";

export async function postFavouriteHandler(req: Request, res: Response) {

  try {
    const { productId, userId } = req.body;

    console.log({ userId, productId })

    const favourite = await postFavourite(productId, userId);

    return res.status(200).json(favourite);
    
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
}
