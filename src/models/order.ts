import { Table, Column, DataType, Model, HasMany, ForeignKey, PrimaryKey, Default, BelongsTo, AllowNull, BelongsToMany } from "sequelize-typescript"
import { v4 as uuidv4 } from 'uuid'
import { Customer } from "./customer"
import { OrderListing } from "./orderListing"
import { Warehouse } from "./warehouse"
import { Product } from "./product"

@Table({modelName: "Order"})
export class Order extends Model {
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string

    @AllowNull(false)
    @ForeignKey(() => Warehouse)
    @Column(DataType.CHAR(36))
    warehouseId: string

    @Default(false)
    @Column(DataType.BOOLEAN)
    confirmed: boolean

    @Column(DataType.STRING)
    shippingAddress: string

    @BelongsTo(() => Warehouse)
    warehouse: Warehouse

    @HasMany(() => OrderListing)
    orderListing: OrderListing[]

    @BelongsToMany(() => Product, () => OrderListing)
    product: Product[]
}