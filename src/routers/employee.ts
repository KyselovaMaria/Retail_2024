import { EmployeeController } from "@/controllers/employee";
import { Router } from "express";

export class EmployeeRouter {
  router: Router;
  path: string;
  controller: EmployeeController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new EmployeeController();
    this.router.get('/:id',this.controller.getEmployeeById)
    this.router.get('/',this.controller.getAllEmployees)
    this.router.post('/',this.controller.createEmployee)
    this.router.delete('/:id',this.controller.deleteEmployee)
    this.router.post('/:id',this.controller.updateEmployee)
  }
}