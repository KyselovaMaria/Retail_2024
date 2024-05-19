import { NextFunction, Request, Response } from "express";
import { forbidden, unauthorized } from "@hapi/boom";

export class PermissionsClass {
  constructor() {}

  public static adminPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if(!req.user) throw unauthorized('You are unauthorized')
      if(!['admin'].includes(req.user.role.name)) throw forbidden('You have no rights to this action')
      next();
    } catch (err) {
      next(err);
    }
  };

  public static managerPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if(!req.user) throw unauthorized('You are unauthorized')
      if(!['admin','manager'].includes(req.user.role.name)) throw forbidden('You have no rights to this action')
      next();
    } catch (err) {
      next(err);
    }
  };

  public static customerPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if(!req.user) throw unauthorized('You are unauthorized')
      if(!['admin', 'manager', 'customer'].includes(req.user.role.name)) throw forbidden('You have no rights to this action')
      next();
    } catch (err) {
      next(err);
    }
  };
}
