import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, IsEmail, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "./role";

@Table({modelName: "User"})
export class User extends Model {
    @AllowNull(false)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.CHAR(36))
    id: string
    
    @AllowNull(false)
    @Column(DataType.STRING)
    username: string

    @AllowNull(false)
    @Column(DataType.STRING)
    email: string

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string

    @AllowNull(false)
    @ForeignKey(() => Role)
    @Column(DataType.INTEGER)
    roleId: number

    @BelongsTo(() => Role)
    role: Role
}