import { AllowNull, BelongsToMany, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Stock } from "@/models/stock";
import { Product } from "./product";

@Table({modelName: "Warehouse"})
export class Warehouse extends Model {
    @AllowNull(false)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string
    
    @AllowNull(false)
    @Column(DataType.STRING)
    address: string

    @HasMany(() => Stock)
    stocks: Stock[]

    @BelongsToMany(() => Product, () => Stock)
    product: Product[]
}