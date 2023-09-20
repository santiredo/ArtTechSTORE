import { Router } from "express";

import productsRouter from "./products";
import orderRouter from "./order";
import userRouter from "./user";
import artistRouter from "./artist";
import commentRouter from "./comment";
import { favouriteRouter } from "./favourites";
import adminRouter from "./admin";
import mercadopago from "mercadopago";

// SDK de Mercado Pago
const URL = "http://127.0.0.1:5173";

const router = Router();

// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-7741310851460716-091516-1590a60389b1b05df8af4e050c4d17ff-354584235",
});

router.use("/create_preference/:id", (req, res) => {
  const { id } = req.params;

  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: `${URL}/success/${id}`,
      failure: `${URL}/failure`,
      pending: "",
    },
    auto_return: undefined,
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.use("/products", productsRouter);
router.use("/order", orderRouter);
router.use("/user", userRouter);
router.use("/artist", artistRouter);
router.use("/comment", commentRouter);
router.use("/favourites", favouriteRouter);
router.use("/admin", adminRouter);

export default router;
