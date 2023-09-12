import { Artist } from "../../db";

// Controlador para obtener todas las creaciones de un artista
export async function getByNameController(name: string | any) {

  const artists = await Artist.findAll()

  const filteredArtists = artists.filter(artist => {
    return artist.dataValues.name.toLowerCase().includes(name.toLowerCase())
  })

  const expresionRegular = /[a-zA-Z]/;
 
  return expresionRegular.test(name) ? filteredArtists : []

}
