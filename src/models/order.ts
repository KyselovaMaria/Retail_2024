import { Table, Column, DataType, Model, HasMany, ForeignKey, PrimaryKey, Default, BelongsTo } from "sequelize-typescript"
import { v4 as uuidv4 } from 'uuid'
import { Customer } from "./customer"
import { OrderListing } from "./orderListing"
import { Warehouse } from "./warehouse"

@Table({modelName: "Order"})
export class Order extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string

    @ForeignKey(() => Customer)
    @Column(DataType.CHAR(36))
    customerId: string

    @ForeignKey(() => Warehouse)
    @Column(DataType.CHAR(36))
    warehouseId: string

    @BelongsTo(() => Customer)
    customer: Customer

    @BelongsTo(() => Warehouse)
    warehouse: Warehouse

    @HasMany(() => OrderListing)
    orderListing: OrderListing[]
}