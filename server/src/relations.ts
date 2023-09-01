import { sequelize } from "./db";

const { Product, User, Comment } = sequelize.models;

//Relacion n:n
User.belongsToMany(Product, { through: "user_product" });
Product.belongsToMany(User, { through: "user_product" });

//Relacion 1:n
User.hasMany(Comment);

//Comment pertenece a un usuario
Comment.belongsTo(User);
