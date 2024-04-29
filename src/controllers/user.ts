import { unauthorized } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export class UserController {
  constructor() {}

  public getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.user) throw unauthorized('Unauthorized')
        return res.status(200).send(req.user);
    } catch (err) {
      next(err)
    }
  };
}
