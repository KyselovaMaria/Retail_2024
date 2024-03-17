import { WarehouseController } from "@/controllers/warehouse";
import { Router } from "express";

export class WarehouseRouter {
  router: Router;
  path: string;
  controller: WarehouseController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new WarehouseController();
    this.router.get('/:id',this.controller.getWarehouseById)
    this.router.get('/',this.controller.getAllWarehouses)
    this.router.post('/',this.controller.createWarehouse)
    this.router.delete('/',this.controller.deleteWarehouse)
    this.router.post('/:id',this.controller.updateWarehouse)
  }
}