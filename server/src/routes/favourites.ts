


import { postFavouriteHandler } from "../handlers/Favourites/postFavourite";
import { getFavouritesByIdHandler } from "../handlers/Favourites/getById";
import { deleteFavouriteHandler } from "../handlers/Favourites/deleteFavourite";
import express from "express";


export const favouriteRouter = express.Router();

favouriteRouter.post('/', postFavouriteHandler);
favouriteRouter.get('/', getFavouritesByIdHandler);
favouriteRouter.delete('/', deleteFavouriteHandler)