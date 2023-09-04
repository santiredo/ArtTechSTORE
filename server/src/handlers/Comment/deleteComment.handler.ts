import { Request, Response } from "express";
import { deleteComments } from "../../controllers/Comment/deleteComment";

export async function deleteCommentsHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await deleteComments(id);

    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
