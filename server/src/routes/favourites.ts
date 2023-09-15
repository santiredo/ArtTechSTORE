


import { postFavouriteHandler } from "../handlers/Favourites/postFavourite";
import { deleteFavouriteHandler } from "../handlers/Favourites/deleteFavourite";
import { getFavouritesByIdHandler } from '../handlers/Favourites/getById'
import express from "express";


export const favouriteRouter = express.Router();

favouriteRouter.post('/', postFavouriteHandler);
favouriteRouter.get('/:id', getFavouritesByIdHandler)
favouriteRouter.delete('/:id', deleteFavouriteHandler)