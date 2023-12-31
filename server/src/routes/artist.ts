import express from "express";
import { deleteArtistHandler } from "../handlers/Artist/deleteArtist";
import { postArtistHandler } from "../handlers/Artist/postArtist";
import { getAllArtistsHandler } from "../handlers/Artist/getAllArtists";
import { getArtistByIdHandler } from "../handlers/Artist/getArtistById";
import { updateArtistHandler } from "../handlers/Artist/updateArtist";
import { getArtistByName } from '../handlers/Artist/getArtistByName';
import { getArtistByMail } from "../handlers/Artist/getArtistByMail";


const artistRouter = express.Router();

artistRouter.get("/:id",getArtistByIdHandler);
artistRouter.get("/",getAllArtistsHandler);
artistRouter.get("/artist/name",getArtistByName);
artistRouter.get("/artist/mail", getArtistByMail)
artistRouter.post("/",postArtistHandler);
artistRouter.delete("/:id",deleteArtistHandler);
artistRouter.put("/:id",updateArtistHandler);


export default artistRouter;