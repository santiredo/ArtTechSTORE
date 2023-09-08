/* eslint-disable linebreak-style */
import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export default function initializeArtistModel(sequelize: Sequelize): void {
  sequelize.define(
    "Artist",
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
        type: DataTypes.STRING,
        validate: {
          isDateFormat: function (value: string) {
            if (!/\d{4}-\d{2}-\d{2}/.test(value)) {
              throw new Error(
                "The field release must have the format YYYY-MM-DD."
              );
            }
          },
        },
      },
      location: { // se modifica esta linea
        type: DataTypes.STRING,
        defaultValue: false
      },
      image: {//se agrega esta linea
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
    }
  );
}
