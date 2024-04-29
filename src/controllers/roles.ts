import { NextFunction, Request, Response } from "express";
import { RoleDao } from "@/dao/role";

export class RolesController {
  constructor() {}

  public getAllRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roles = await RoleDao.getAllRoles()
        return res.status(200).send(roles)
    }
    catch(e) {
        next(e)
    }
  };
}