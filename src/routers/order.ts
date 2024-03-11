import { OrderController } from "@/controllers/order";
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
  }
}