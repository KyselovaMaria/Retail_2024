import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { conflict, notFound, unauthorized } from "@hapi/boom";
import config from "@/config/variables";
import { UserDao } from "@/dao/user";
import Joi from 'joi'

export class AuthController {
  constructor() {}

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;

      const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
      });
      await schema.validateAsync(req.body);

      const user = await UserDao.getUserByUsername(username);
      if (!user) {
        throw notFound('User not found');
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw unauthorized('Invalid password');
      }
      const token = jwt.sign({ id: user.id, username: user.username }, config.SECRET_AUTH_KEY, { expiresIn: '30d' });
      return res.status(200).send({ user, token });
    } catch (err) {
      next(err)
    }
  };

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password, roleId } = req.body
      const schema = Joi.object({
        username: Joi.string().min(4).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(20).required(),
        roleId: Joi.number().required(),
      });
      await schema.validateAsync(req.body);

      const userExisting = await UserDao.getUserByUsername(username)

      if(!userExisting) throw conflict('User already registered with this username')
  
      const hashedPassword = await bcrypt.hash(password, 5);

      const userCreateData = {
        username,
        email,
        password: hashedPassword,
        roleId
      }
      const user = await UserDao.createUser(userCreateData);
      return res.status(200).send({user});
    } catch (err) {
      next(err)
    }
  };

}
