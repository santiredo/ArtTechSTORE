import { Request, Response } from 'express';
import {
  createStatus,
  getStatuses,
  getStatusById,
  updateStatus,
  deleteStatus,
} from '../controllers/statusController';

// Manejador para crear un estado
export async function createStatusHandler(req: Request, res: Response) {
  try {
    const newStatusData = req.body;
    const newStatus = await createStatus(newStatusData);
    return res.status(201).json(newStatus);
  } catch (error) {
    console.error('Error al crear el estado', error);
    return res.status(500).json({ error: 'Error al crear el estado' });
  }
}

// Manejador para obtener todos los estados
export async function getStatusesHandler(req: Request, res: Response) {
  try {
    const statuses = await getStatuses();
    return res.json(statuses);
  } catch (error) {
    console.error('Error al obtener los estados', error);
    return res.status(500).json({ error: 'Error al obtener los estados' });
  }
}

// Manejador para obtener un estado por su ID
export async function getStatusByIdHandler(req: Request, res: Response) {
  try {
    const statusId = parseInt(req.params.id, 10);
    const status = await getStatusById(statusId);

    if (!status) {
      return res.status(404).json({ message: 'Estado no encontrado' });
    }

    return res.json(status);
  } catch (error) {
    console.error('Error al obtener el estado', error);
    return res.status(500).json({ error: 'Error al obtener el estado' });
  }
}

// Manejador para actualizar un estado por su ID
export async function updateStatusHandler(req: Request, res: Response) {
  try {
    const statusId = parseInt(req.params.id, 10);
    const newData = req.body;
    const updatedStatus = await updateStatus(statusId, newData);
    return res.json(updatedStatus);
  } catch (error) {
    console.error('Error al actualizar el estado', error);
    return res.status(500).json({ error: 'Error al actualizar el estado' });
  }
}

// Manejador para eliminar un estado por su ID
export async function deleteStatusHandler(req: Request, res: Response) {
  try {
    const statusId = parseInt(req.params.id, 10);
    await deleteStatus(statusId);
    return res.status(204).send(); // 204 significa "No Content" (sin contenido)
  } catch (error) {
    console.error('Error al eliminar el estado', error);
    return res.status(500).json({ error: 'Error al eliminar el estado' });
  }
}
