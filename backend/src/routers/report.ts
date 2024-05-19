import { ReportController } from "@/controllers/report";
import { PermissionsClass } from "@/utils/permissions";
import { Router } from "express";

export class ReportRouter {
  router: Router;
  path: string;
  controller: ReportController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new ReportController();
    this.router.get('/:id', this.controller.getWarehouseReport)
  }
}