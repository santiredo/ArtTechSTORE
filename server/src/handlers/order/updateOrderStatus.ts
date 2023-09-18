import { Request, Response } from 'express';
import { updateOrder } from '../../controllers/Order/updateOrderStatus';
import nodemailer = require ('nodemailer')
import {User} from '../../db'


export async function updateOrderHandler(req: Request, res: Response){
    try {
        const {id} = req.params

        const {statusId} = req.body

        const orderId = Number(id)

        const updatedOrder = await updateOrder(orderId, statusId)

        if(updatedOrder){const  transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'artechstorehenry@gmail.com',
                pass: 'wslmjgroogkqmlzm'
            }
        })
        const MailOptions = {
            from: '"Art Tech Store" artechstorehenry@gmail.com',
            to: 'user.mail',
            subject: "Confirmación de pago",
            text: "Gracias por elegir Art Tech Store como su proveedor de arte, esperemos que lo disfrute",
        }
        transporter.sendMail(MailOptions)

        }
            

        return res.status(200).json(updatedOrder)
        
    } catch (error) {
        return res.status(500).json({error: 'Error al actualizar la orden'})
    }
    
}