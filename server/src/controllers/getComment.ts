import { Comment } from "../db";

export const getComments = async (productId: string) => {
  try {
    const comments = await Comment.findAll({
      where: { productId }, // Busca comentarios relacionados con el producto específico
    });

    if (!comments || comments.length === 0) {
      throw new Error("No se encontraron comentarios para este producto.");
    }

    return comments;
  } catch (error: any) {
    throw new Error("Error al obtener comentarios: " + error.message);
  }
};
