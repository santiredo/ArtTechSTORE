import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export default function initializeCommentModel(sequelize: Sequelize): void {
  sequelize.define('Favourite',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
}
