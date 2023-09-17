import { Request, Response } from 'express';
import { Artist } from "../../db";
import { updateArtist } from '../../controllers/Artist/updateArtist';

export async function updateArtistHandler(req: Request, res: Response) {
    const { id } = req.params;
    const artistId = Number(id);
    const { name, password, image } = req.body;

    try {
        const artist = await Artist.findByPk(artistId);

        if (artist) {
            const updatedArtist = await updateArtist(artistId, {
                name,
                password,
                image,
            });

            console.log("The Artist has been updated", updatedArtist);

            res.status(200).json(updatedArtist);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        console.error("Error:", error);        
        res.status(500).json({ message: 'Error updating artist' });
    }
};