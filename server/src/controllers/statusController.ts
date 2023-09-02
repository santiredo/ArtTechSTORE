import { statusModel } from '../models/Status';

// Controlador para crear un estado
export async function createStatus(newStatusData: Partial<statusModel>) {
  return statusModel.create(newStatusData);
}

// Controlador para obtener todos los estados
export async function getStatuses() {
  return statusModel.findAll();
}

// Controlador para obtener un estado por su ID
export async function getStatusById(statusId: number) {
  return statusModel.findByPk(statusId);
}

// Controlador para actualizar un estado por su ID
export async function updateStatus(statusId: number, newData: Partial<statusModel>) {
  const status = await statusModel.findByPk(statusId);
  if (!status) {
    throw new Error('Estado no encontrado');
  }

  return status.update(newData);
}

// Controlador para eliminar un estado por su ID
export async function deleteStatus(statusId: number) {
  const status = await statusModel.findByPk(statusId);
  if (!status) {
    throw new Error('Estado no encontrado');
  }

  return status.destroy();
}
