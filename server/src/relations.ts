import { sequelize } from "./db";

const { Product, User } = sequelize.models;

User.belongsToMany(Product, { through: "user_product" });
Product.belongsToMany(User, { through: "user_product" });
