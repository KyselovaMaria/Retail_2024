import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "@/models/product";
import { Warehouse } from "@/models/warehouse";
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "Stock"})
export class Stock extends Model {
    @AllowNull(false)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string

    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column(DataType.CHAR(36))
    productId: string
    
    @AllowNull(false)
    @ForeignKey(() => Warehouse)
    @Column(DataType.CHAR(36))
    warehouseId: string

    @Column(DataType.INTEGER)
    amount: number

    @BelongsTo(() => Product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    product: Product

    @BelongsTo(() => Warehouse, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    warehouse: Warehouse
}