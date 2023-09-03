import { Status } from '../db';

// Controlador para crear un estado
/* export async function createStatus(newStatusData: Partial<Status>) {
  return Status.create(newStatusData);
}
 */
// Controlador para obtener todos los estados
export async function getStatuses() {
  return Status.findAll();
}

// Controlador para obtener un estado por su ID
export async function getStatusById(statusId: number) {
  return Status.findByPk(statusId);
}

// Controlador para actualizar un estado por su ID
/* export async function updateStatus(statusId: number, newData: Partial<Status>) {
  const status = await Status.findByPk(statusId);
  if (!status) {
    throw new Error('Estado no encontrado');
  }

  return status.update(newData);
} */

// Controlador para eliminar un estado por su ID
export async function deleteStatus(statusId: number) {
  const status = await Status.findByPk(statusId);
  if (!status) {
    throw new Error('Estado no encontrado');
  }

  return status.destroy();
}
