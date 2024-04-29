import { RolesController } from "@/controllers/roles";
import { Router } from "express";

export class RolesRouter {
  router: Router;
  path: string;
  controller: RolesController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new RolesController();
    this.router.get('/', this.controller.getAllRoles)
  }
}