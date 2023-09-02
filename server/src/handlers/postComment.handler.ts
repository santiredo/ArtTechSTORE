import { Request, Response } from "express";
import { postComment } from "../controllers/postComment";

export async function postCommentsHandler(req: Request, res: Response) {
  try {
    const { productId, userId } = req.params;
    const { message, rating } = req.body;

    const comment = await postComment(productId, userId, message, rating);

    return res.status(200).json(comment);
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
}
