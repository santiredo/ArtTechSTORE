import { Artist, Product } from "../../db";  

// Controlador para obtener todos los productos

interface ArtistInterface {
    id: number
    name: string
    mail: string
    birthDate: string
    location: string
    image: string
}

export async function getProducts() {

    const allProducts = await Product.findAll();

    let artistIds: number[] = allProducts.map((product) => product.dataValues.ArtistId);

    let artistPromises: Promise<ArtistInterface | null>[] = artistIds.map(async (id) => {
        let artist = await Artist.findByPk(id);
        return artist?.dataValues || null;
    });

    let artists = await Promise.all(artistPromises) ;

    return allProducts.map((product, i) => {
        return {...product.dataValues, artistName: artists[i]!.name, artistPhoto: artists[i]!.image, artistId:artists[i]!.id }
    })    
}