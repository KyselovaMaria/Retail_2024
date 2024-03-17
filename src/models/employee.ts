import { Column, DataType, Default, IsEmail, Model, PrimaryKey, Table } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid'

@Table({modelName: "Employee"})
export class Employee extends Model {
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
    employment: string

    @Column(DataType.STRING)
    address: string

    @Column(DataType.DATE)
    birthDate: Date

    @Column(DataType.DATE)
    employmentDate: Date
}