const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Favourite = require("./favourite");

const Usuario = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
    },
    direction: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

Usuario.hasMany(Favourite, { foreignKey: "userId" }); // Relación de Usuario a Favoritos

module.exports = Usuario;

// module.exports = (sequelize) => {
//     sequelize.define('user', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING
//         },
//         mail: {
//             type: DataTypes.STRING
//         },
//         password: {
//             type: DataTypes.STRING
//         },
//         birthDate: {
//             type: DataTypes.DATEONLY
//         },
//         direction: {
//             type: DataTypes.STRING
//         }
//     }, { timestamps: false })
// }
