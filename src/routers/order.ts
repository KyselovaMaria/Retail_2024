import { OrderController } from "@/controllers/order";
import { PermissionsClass } from "@/utils/permissions";
import { Router } from "express";

export class OrdersRouter {
  router: Router;
  path: string;
  controller: OrderController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new OrderController();
    this.router.get('/:id',this.controller.getOrderById)
    this.router.get('/',this.controller.getAllOrders)
    this.router.post('/',this.controller.createOrder)
    this.router.delete('/:id',this.controller.deleteOrder)
    this.router.post('/:id',this.controller.updateOrder)
    this.router.post('/confirm/:id', PermissionsClass.managerPermission, this.controller.confirmOrder)
  }
}