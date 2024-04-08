import { CustomerController } from "@/controllers/customer";
import { Router } from "express";

export class CustomerRouter {
  router: Router;
  path: string;
  controller: CustomerController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new CustomerController();
    this.router.get('/:id',this.controller.getCustomerById)
    this.router.get('/',this.controller.getAllCustomers)
    this.router.post('/',this.controller.createCustomer)
    this.router.delete('/:id',this.controller.deleteCustomer)
    this.router.post('/:id',this.controller.updateCustomer)
  }
}