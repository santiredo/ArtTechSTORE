import { sequelize } from './db'; 



const { Product, User, Favourite, Comment,Order } = sequelize.models
User.belongsToMany(Product, {through: 'user_product'})
Product.belongsToMany(User, {through: 'user_product'})
Order.belongsTo(User)


// aca las relaciones directas entre Favourite, User y Product
User.belongsToMany(Product, { through: Favourite, foreignKey: 'userId' });
Product.belongsToMany(User, { through: Favourite, foreignKey: 'productId' });

// y ahora defininimos las relaciones inversas si es necesario;
/* aca, al definir las relaciones inversas en el modelo 
Favourite (Favourite.belongsTo(User) y Favourite.belongsTo(Product)) 
permite que, dado un favorito, puedamos acceder directamente al usuario y 
al producto relacionados sin necesidad de realizar una consulta 
adicional. Esto puede ser útil en situaciones en las que necesitemos 
acceder a los datos relacionados de manera eficiente. a que me refiero 
con eficiente? Las relaciones inversas permiten acceder a los registros 
relacionados sin necesidad de realizar una nueva consulta a la base de 
datos. En lugar de buscar todos los productos favoritos de un usuario, 
puedemos simplemente acceder a la propiedad User.Favourites para obtener 
los favoritos relacionados.*/
Favourite.belongsTo(User, { foreignKey: 'userId' });
Favourite.belongsTo(Product, { foreignKey: 'productId' });

// relación entre Comment y User
Comment.belongsTo(User, { foreignKey: 'userId', as: 'user' });

