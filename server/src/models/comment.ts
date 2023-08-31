import { DataType, Model } from 'sequelize-typescript';

class Comment extends Model {
    id!: number;
    message!: string;
    rating!: number;
}

export default function initializeCommentModel(sequelize: any): void {
    Comment.init({
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        message: {
            type: DataType.TEXT
        },
        rating: {
            type: DataType.INTEGER,
            validate: {
                min: 1,
                max: 100
            }
        }
        },
        {
            sequelize,
            modelName: 'Comment', // Nombre de la tabla
        }
    );
}