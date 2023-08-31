import { Request, Response } from 'express';
//import { QueryResult } from 'pg';
import User from '../models/user';
import sequelize from '../routes/dbConnect';

export const getUsers = async(req: Request, res: Response) => {
    const response = await sequelize.query('SELECT * FROM users');        
    res.status(200).json(response);
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, mail, password, birthdate, direction } = req.body;
  
        // Crear una nueva instancia del modelo User
        const newUser = new User();
        newUser.name = name;
        newUser.mail = mail;
        newUser.password = password;
        newUser.birthdate = birthdate;
        newUser.direction = direction;
  
        // Guardar el nuevo usuario en la base de datos
        await newUser.save();
  
        res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};