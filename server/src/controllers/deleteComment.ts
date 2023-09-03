import { Comment } from "../models/Comment";

export const deleteComments = async (id: string) => {
  const deletedComment = await Comment.findByPk(id);

  if (!deletedComment) {
    throw new Error("Favorito no encontrado");
  }

  await deletedComment.destroy();
};
