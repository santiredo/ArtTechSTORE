import { Request, Response } from "express";
import { postComment } from "../../controllers/Comment/postComment";

export async function postCommentsHandler(req: Request, res: Response) {
  try {
    //const { productId, userId } = req.params;
    const { message, rating, userId, productId } = req.body;

    const comment = await postComment( message, rating, userId, productId);

    return res.status(200).json(comment);
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
}
