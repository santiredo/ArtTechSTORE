import { Request, Response } from 'express';
import { createFavourite } from '../../controllers/favourite/postFavourite';

// Manejador para crear un nuevo favorito
export async function createFavouriteHandler(req: Request, res: Response) {
  try {
    // Aquí, deberiamos extraer los datos necesarios para crear el favorito del cuerpo de la solicitud (req.body).
    // Por ejemplo, si esperamos un JSON con 'userId' y 'productId', puedemos hacer lo siguiente(por favor revisen la logica que podemos usar, no se me ocurre nada mas):

    const { userId, productId } = req.body;
    const data = { userId, productId };

    const favourite = await createFavourite(data);

    return res.status(201).json(favourite); // 201 significa "Created" (creado) o colocamos un mensaje de "Favorito creado o agregado"
  } catch (error) {
    console.error('Error al crear el favorito', error);
    return res.status(500).json({ error: 'Error al crear el favorito' });
  }
}