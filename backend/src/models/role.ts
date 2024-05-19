import { AllowNull, AutoIncrement, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user";

@Table({modelName: "Role"})
export class Role extends Model {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number
    
    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @HasMany(() => User)
    user: User[]
}