import { WarehouseController } from "@/controllers/warehouse";
import { PermissionsClass } from "@/utils/permissions";
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
    this.router.post('/', PermissionsClass.adminPermission, this.controller.createWarehouse)
    this.router.delete('/:id', PermissionsClass.adminPermission, this.controller.deleteWarehouse)
    this.router.post('/:id', PermissionsClass.adminPermission, this.controller.updateWarehouse)
    this.router.get('/withProduct/:id',this.controller.getAllWarehousesWithProduct)
  }
}