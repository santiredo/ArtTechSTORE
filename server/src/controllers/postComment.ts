import { Comment } from "../models/Comment";

export async function postComment(productId: string, userId: string, message: string, rating: number) {
    try{
        const comment = await Comment.create({
            message,
            rating,
            productId,
            userId
        })

        // El comentario se ha creado exitosamente
        console.log("Comentario creado:", comment.toJSON());
        
        return comment;
    } catch(error: any){
        // Manejar cualquier error que pueda ocurrir durante la creación del comentario
        console.error("Error al crear el comentario:", error);
        throw error; // Puedes decidir si quieres propagar el error o manejarlo de otra manera.
    }
}
