import { Table, Column, DataType, Model, ForeignKey, BelongsTo, HasOne, PrimaryKey, Default, AllowNull } from "sequelize-typescript"
import { Order } from "./order"
import { Product } from "./product"
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "OrderListing"})
export class OrderListing extends Model {
    @AllowNull(false)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string
    
    @AllowNull(false)
    @ForeignKey(() => Order)
    @Column(DataType.CHAR(36))
    orderId: string

    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column(DataType.CHAR(36))
    productId: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    amount: number

    @BelongsTo(() => Order, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    order: Order

    @BelongsTo(() => Product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    product: Product
}