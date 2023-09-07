import express from "express";
import { paymentMercadopagoHandler } from "../handlers/mercadopago/paymentMercadopago";

const paymentRouter = express.Router();

paymentRouter.get("/create-order", paymentMercadopagoHandler);

paymentRouter.get('/success', (req, res) => res.send('creating orders'));

paymentRouter.get('/webhook', (req, res) => res.send('webhook'));

export default paymentRouter;