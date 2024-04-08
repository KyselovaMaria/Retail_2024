import { StockController } from "@/controllers/stock";
import { Router } from "express";

export class StockRouter {
  router: Router;
  path: string;
  controller: StockController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new StockController();
    this.router.post('/',this.controller.createStock)
    this.router.delete('/:id',this.controller.deleteStock)
    this.router.post('/addToStock', this.controller.addToStock)
    this.router.post('/transferStock', this.controller.transferStock)
  }
}