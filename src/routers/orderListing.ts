import { OrderListingController } from "@/controllers/orderListing";
import { Router } from "express";

export class OrderListingRouter {
  router: Router;
  path: string;
  controller: OrderListingController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new OrderListingController();
    this.router.post('/',this.controller.createOrderListing)
    this.router.delete('/:id',this.controller.deleteOrderListing)
    this.router.post('/:id',this.controller.updateOrderListing)
  }
}