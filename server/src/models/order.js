const { DataTypes, or } = require("sequelize");
const sequelize = require("../config/db.js");



const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});


module.exports = Order




// module.exports = (sequelize) => {
//   sequelize.define("order", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//   });
// };