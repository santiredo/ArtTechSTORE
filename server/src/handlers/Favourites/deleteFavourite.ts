import { Request, Response } from "express";
import { deleteFavourite } from "../../controllers/Favourites/deleteFavourite";

export async function deleteFavouriteHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const favourite = await deleteFavourite(Number(id));

    return res.status(200).json({favourite, message: 'Favourite deleted successfully'})

  } catch (error: any) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
