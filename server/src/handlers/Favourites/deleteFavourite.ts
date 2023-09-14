import { Request, Response } from "express";
import { deleteFavourite } from "../../controllers/Favourites/deleteFavourite";

export async function deleteFavouriteHandler(req: Request, res: Response) {
  try {
    const { id } = req.body;

    await deleteFavourite(id);

    return res.status(200).json({message: 'Favourite deleted successfully'})

  } catch (error: any) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
