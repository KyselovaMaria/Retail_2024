import { Table, Column, DataType, Model, ForeignKey, BelongsTo, HasOne, PrimaryKey, Default } from "sequelize-typescript"
import { Order } from "./order"
import { Product } from "./product"
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "OrderListing"})
export class OrderListing extends Model {
    @PrimaryKey
    @Default(uuidv4())
    @Column(DataType.CHAR(36))
    id: string
    
    @ForeignKey(() => Order)
    @Column(DataType.CHAR(36))
    orderId: number

    @ForeignKey(() => Product)
    @Column(DataType.CHAR(36))
    productId: number

    @Column(DataType.INTEGER)
    amount: number

    @BelongsTo(() => Order)
    order: Order

    @BelongsTo(() => Product)
    product: Product
}