import { Artist, Product } from "../../db";

// Controlador para obtener un producto por su ID
export async function getProductById(productId: number) {


    const product = await Product.findByPk(productId);


    const artistData = await Artist.findByPk(product?.dataValues.ArtistId)

    console.log(artistData)


    return {...product?.dataValues, artistName: artistData?.dataValues.name, artistPhoto: artistData?.dataValues.image}

}
  