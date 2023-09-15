import { Product } from '../../db';

// Controlador para crear un producto
export async function createProduct(
  title:string,
  price:number,
  type:string,
  technique:string,
  description:string,
  image:string,
  ArtistId:number
) {

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const newProduct = await Product.create({
    title,
    price,
    type,
    published: formattedDate,
    technique: technique,
    description,
    image,
    ArtistId
  })

  console.log(newProduct)

  return newProduct;
}