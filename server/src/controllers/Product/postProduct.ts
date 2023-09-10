import { ARRAY } from 'sequelize';
import { Artist, Product } from '../../db';

// Controlador para crear un producto
export async function createProduct(
  title:string,
  price:number,
  published:string,
  auction:boolean,
  type:string,
  technique:string,
  description:string,
  image:string,
  id:number
) {

  const newProduct = await Product.create({
    title,
    price,
    published,
    auction,
    type,
    technique,
    description,
    image,
    ArtistId:id
  })

  console.log(newProduct)

  return newProduct;
}