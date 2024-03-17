import { Column, DataType, Default, HasOne, IsEmail, Model, PrimaryKey, Table } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid'
import { Order } from "./order";

@Table({modelName: "Customer"})
export class Customer extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string

    @Column(DataType.STRING)
    lastName: string

    @Column(DataType.STRING)
    firstName: string

    @Column(DataType.STRING)
    patronymic: string

    @Column(DataType.STRING)
    phone: string
    
    @IsEmail
    @Column(DataType.STRING)
    email: string

    @Column(DataType.STRING)
    shippingAdress: string

    @HasOne(() => Order)
    order: Order
}

