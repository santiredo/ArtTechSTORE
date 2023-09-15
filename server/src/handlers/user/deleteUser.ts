import { Request, Response } from 'express'
import { deleteUser } from '../../controllers/User/deleteUser'

export async function deleteUserHandler (req:Request, res: Response){
    try{
        const userId = parseInt(req.params.id, 10)
        const deletedUser=await deleteUser(userId)
        return res.status(200).send(deletedUser)
    } catch (error) {
        console.error('Error while eliminating the user')
        return res.status(500).json({error: 'Error while eliminating the user'})
    }
}