const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Status = sequelize.define(
  'status',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Status;
