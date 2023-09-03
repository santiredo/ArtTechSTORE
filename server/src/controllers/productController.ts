import { Product } from '../db';

// Controlador para crear un producto
export async function createProduct(
  title:string,
  price:number,
  published:string,
  bet:boolean,
  type:string,
  technique:string,
  description:string,
  image:string
) {

  const newProduct = await Product.create({
    title,
    price,
    published,
    bet,
    type,
    technique,
    description,
    image
  })


  return newProduct;
}






// Controlador para obtener todos los productos
export async function getProducts() {
  return Product.findAll();
}

// Controlador para obtener un producto por su ID
export async function getProductById(productId: number) {
  return Product.findByPk(productId);
}

// Controlador para actualizar un producto por su ID
export async function updateProduct(numberId:number, price:number) {

  const updatedProduct = await Product.findByPk(numberId)

 /*  !updatedProduct && {success: false, message: 'We couldnt find that product'} */


 updatedProduct!.dataValues.price = price

 await updatedProduct?.save()

 return updatedProduct



/*   const product = await Product.findByPk(productId);
  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product.update(newData); */
}

export async function deleteProduct(productId: number) {
  const product = await Product.findByPk(productId);
  if (!product) {
    throw new Error('Product no encontrado');
  }

  return product.destroy();
}