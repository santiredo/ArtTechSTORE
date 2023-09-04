import { Artist } from "../../db";

export async function updateArtist(artistId: number, name: string,password: string) {
    
    
    const artist = await Artist.update({
        name,
        password,
    }, { where: { id: artistId } });

    console.log("Nuevo artista",artist);
    return artist;
}