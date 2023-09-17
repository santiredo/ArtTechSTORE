import { Artist, Product } from "../../db";

// Controlador para obtener un producto por su ID
export async function getProductById(productId: number) {


    const product = await Product.findByPk(productId);

    console.log("Estoy en el producto", product);
    
    const artistData = await Artist.findByPk(product?.dataValues.ArtistId)


    return {...product?.dataValues, artistName: artistData?.dataValues.name, artistPhoto: artistData?.dataValues.image}

}
  