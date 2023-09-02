import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export class Comment extends Model {
  id!: number;
  message!: string;
  rating!: number;
}

export default function initializeCommentModel(sequelize: Sequelize): void {
  Comment.init(
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
      sequelize,
      modelName: "Comment",
      timestamps: false,
    }
  );
}
