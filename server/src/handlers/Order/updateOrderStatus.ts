import { Request, Response } from 'express';
import { updateOrder } from '../../controllers/Order/updateOrderStatus';
import nodemailer = require ('nodemailer')
import {User} from '../../db'


export async function updateOrderHandler(req: Request, res: Response){
    try {
        const {id} = req.params

        const orderId = Number(id)

        const updatedOrder = await updateOrder(orderId)

        const user = await User.findOne({
            where:{
                id: updatedOrder!.dataValues.UserId
            }
        })
        const userMail = user?.dataValues.mail
        
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
            to: userMail,
            subject: "Confirmación de pago",
            text: `Hola!
            
            Confirmamos el pago por tu compra en Art Tech Store.
            
            El numero de tu pedido es #${orderId}
            
            Ya estamos preparando tu pedido para enviártelo. ¡Te vamos a avisar cuando esté en camino!
            
            Gracias por elegir Art Tech Store como su proveedor de arte, esperemos que lo disfrute.`,
        }
        transporter.sendMail(MailOptions)

        }
            

        return res.status(200).json(updatedOrder)
        
    } catch (error) {
        return res.status(500).json({error: 'Error al actualizar la orden'})
    }
    
}