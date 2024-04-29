import { Role } from "@/models/role";
import { User } from "@/models/user";

export class UserDao {
  constructor() {}

  public static getAllUsers = async () => {
    const users = await User.findAll({
        include: [Role]
    });
    return users
  };

  public static getUserById = async (id: string) => {
    const user = await User.findByPk(id,{
        include: [Role]
    })
    return user
  };

  public static getUserByUsername = async (username: string) => {
    const user = await User.findOne({
        where: {
            username
        },
        include: [Role]
    })
    return user
  };

  public static createUser = async (data: Partial<User>) => {
    const user = await User.create(data)
    return user
  };

  public static deleteUser = async (id: string) => {
    await User.destroy({
      where: {
        id
      }
    })
    return true
  };

  public static updateUser = async (id: string, updateData: Partial<User>) => {
    const updatedUser = await User.update(updateData, {
      where: {
        id: id,
      },
      returning: true
    })
    return updatedUser
  };
}