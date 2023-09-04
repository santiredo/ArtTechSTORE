import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export default function initializeCommentModel(sequelize: Sequelize): void {
  sequelize.define('Comment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      message: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
}
