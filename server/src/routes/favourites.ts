import express from "express";
import { getFavouriteHandler } from "@/handlers/favourites/getFavourite";
import { createFavouriteHandler } from "@/handlers/favourites/postFavourite";
import { deleteFavouriteHandler } from "@/handlers/favourites/deleteFavourite";

const favoritesRouter =express.Router();

favoritesRouter.get("/:id",getFavouriteHandler);
favoritesRouter.post("/",createFavouriteHandler);
favoritesRouter.delete("/:id",deleteFavouriteHandler);


export default favoritesRouter;