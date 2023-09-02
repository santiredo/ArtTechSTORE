import { Request, Response } from "express";
import { getComments } from "../controllers/getComment";

export async function getCommentsHandler(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    const comments = await getComments(productId);

    return res.status(200).json(comments);
  } catch (error: any) {
    return res.status(400).send("Comments Not Found!");
  }
}
