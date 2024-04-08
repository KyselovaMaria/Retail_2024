import { AllowNull, BelongsToMany, Column, DataType, Default, HasAssociation, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Stock } from "@/models/stock";
import { OrderListing } from "./orderListing";
import { v4 as uuidv4 } from 'uuid'
import { Warehouse } from "./warehouse";
import { Order } from "./order";

@Table({modelName: "Product"})
export class Product extends Model {
    @AllowNull(false)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string
    
    @AllowNull(false)
    @Column(DataType.INTEGER)
    price: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    minimumStock: number

    @HasMany(() => Stock)
    stocks: Stock[]

    @BelongsToMany(() => Order, () => OrderListing)
    order: Order[]

    @BelongsToMany(() => Warehouse, () => Stock)
    warehouse: Warehouse[]
}