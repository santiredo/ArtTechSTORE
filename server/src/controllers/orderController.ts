import { Request, Response } from 'express';
const Order = require('../models/order.js')
const User = require('../models/user.js')

export const createOrder = async (req: Request, res: Response) => {
  const { userId, statusId, price, address } = req.body;

  try {
    const order = await Order.create({ userId, statusId, price, address });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden' });
  }
};
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};
export const getOrdersByUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId, {
      include: Order, // Incluir las órdenes asociadas al usuario
    });

    if (user) {
      res.json(user.Orders); // Accede a las órdenes a través de la relación
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes del usuario' });
  }
};
export const deleteOrder = async (req: Request, res: Response) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findByPk(orderId);

    if (order) {
      await order.destroy();
      res.json({ message: 'Orden eliminada exitosamente' });
    } else {
      res.status(404).json({ message: 'Orden no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la orden' });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const { userId, statusId, price, address } = req.body;

  try {
    const order = await Order.findByPk(orderId);

    if (order) {
      order.userId = userId;
      order.statusId = statusId;
      order.price = price;
      order.address = address;
      await order.save();
      res.json(order);
    } else {
      res.status(404).json({ message: 'Orden no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la orden' });
  }
};