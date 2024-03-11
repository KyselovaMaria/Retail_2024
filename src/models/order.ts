import { Table, Column, DataType, Model, HasMany, ForeignKey, PrimaryKey, Default } from "sequelize-typescript"
import { v4 as uuidv4 } from 'uuid'
import { Customer } from "./customer"
import { OrderListing } from "./orderListing"

@Table({modelName: "Order"})
export class Order extends Model {
    @PrimaryKey
    @Default(uuidv4())
    @Column(DataType.CHAR(36))
    id: string

    @ForeignKey(() => Customer)
    @Column(DataType.CHAR(36))
    customerId: number

    @HasMany(() => OrderListing)
    orderListing: OrderListing[]
}