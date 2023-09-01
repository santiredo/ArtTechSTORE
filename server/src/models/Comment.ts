import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export class commentModel extends Model {
  id!: number;
  message!: string;
  rating!: number;
}

export default function Comment(sequelize: Sequelize): void {
  commentModel.init(
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
    }
  );
}
