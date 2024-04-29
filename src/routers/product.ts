import { ProductController } from "@/controllers/product";
import { PermissionsClass } from "@/utils/permissions";
import { Router } from "express";

export class ProductRouter {
  router: Router;
  path: string;
  controller: ProductController;

  constructor(path: string) {
    (this.router = Router()), (this.path = path);
    this.controller = new ProductController();
    this.router.get('/:id', this.controller.getProductById)
    this.router.get('/',this.controller.getAllProducts)
    this.router.post('/', PermissionsClass.adminPermission, this.controller.createProduct)
    this.router.delete('/:id', PermissionsClass.adminPermission, this.controller.deleteProduct)
    this.router.post('/:id', PermissionsClass.adminPermission, this.controller.updateProduct)
  }
}