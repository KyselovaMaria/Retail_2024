import { BelongsTo, Column, DataType, Default, HasAssociation, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Stock } from "@/models/stock";
import { OrderListing } from "./orderListing";
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "Product"})
export class Product extends Model {
    @PrimaryKey
    @Default(uuidv4())
    @Column(DataType.CHAR(36))
    id: string

    @Column(DataType.STRING)
    name: string
    
    @Column(DataType.INTEGER)
    price: number

    @Column(DataType.INTEGER)
    minimumStock: number

    @HasMany(() => Stock)
    stocks: Stock[]

    @HasMany(() => OrderListing)
    orderListing: OrderListing[]
}