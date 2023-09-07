import { Request, Response } from 'express'
import { deleteUser } from '../../controllers/user/deleteUser'

export async function deleteUserHandler (req:Request, res: Response){
    try{
        const userId = parseInt(req.params.id, 10)
        await deleteUser(userId)
        return res.status(200).send()
    } catch (error) {
        console.error('Error al eliminar el usuario')
        return res.status(500).json({error: 'Error al eliminar el usuario'})
    }
}