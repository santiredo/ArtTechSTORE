import { DataType, Model } from 'sequelize-typescript';

class Favourite extends Model {
    public id!: number;
}

export default function initializeFavouriteModel(sequelize: any): void {
    Favourite.init(
        {
            id : {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }
        },{
            sequelize,
            modelName: 'favourite'
        }
    )
}
