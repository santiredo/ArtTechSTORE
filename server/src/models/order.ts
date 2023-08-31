import { DataType, Model } from 'sequelize-typescript';

class Order extends Model {
    id!: number;
}

export default function initializeOrderModel(sequelize: any): void {
    Order.init(
        {
            id : {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }
        },{
            sequelize,
            modelName: 'order'
        }
    )
}
