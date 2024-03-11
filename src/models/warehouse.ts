import { Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Stock } from "@/models/stock";
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "Warehouse"})
export class Warehouse extends Model {
    @PrimaryKey
    @Default(uuidv4())
    @Column(DataType.CHAR(36))
    id: string

    @Column(DataType.STRING)
    name: string
    
    @Column(DataType.STRING)
    address: string

    @HasMany(() => Stock)
    stocks: Stock[]
}