import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "@/models/product";
import { Warehouse } from "@/models/warehouse";
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "Stock"})
export class Stock extends Model {
    @PrimaryKey
    @Default(uuidv4())
    @Column(DataType.CHAR(36))
    id: string

    @ForeignKey(() => Product)
    @Column(DataType.CHAR(36))
    productId: number
    
    @ForeignKey(() => Warehouse)
    @Column(DataType.CHAR(36))
    warehouseId: number

    @Column(DataType.INTEGER)
    amount: number

    @BelongsTo(() => Product)
    product: Product

    @BelongsTo(() => Warehouse)
    warehouse: Warehouse
}