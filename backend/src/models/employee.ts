import { AllowNull, Column, DataType, Default, IsEmail, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({modelName: "Employee"})
export class Employee extends Model {
    @AllowNull(false)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string
    
    @AllowNull(false)
    @Column(DataType.STRING)
    lastName: string

    @AllowNull(false)
    @Column(DataType.STRING)
    firstName: string

    @AllowNull(false)
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