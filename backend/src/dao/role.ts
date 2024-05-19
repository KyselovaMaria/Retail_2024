import { Role } from "@/models/role";

export class RoleDao {
  constructor() {}

  public static getAllRoles = async () => {
    const roles = await Role.findAll();
    return roles
  };

}