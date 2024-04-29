
import { AuthController } from "@/controllers/auth";
import { Router } from "express";

export class AuthRouter {
  router: Router;
  path: string;
  controller: AuthController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new AuthController();
    this.router.post('/login',this.controller.login)
    this.router.post('/signup',this.controller.signup)
  }
}