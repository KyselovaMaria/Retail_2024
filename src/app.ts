import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import sequelize from "@/config/sequelize";
import { OrdersRouter } from "@/routers/order";
import { Boom, isBoom } from "@hapi/boom";
import { WarehouseRouter } from "./routers/warehouse";
import { ProductRouter } from "./routers/product";
import { OrderListingRouter } from "./routers/orderListing";
import { StockRouter } from "./routers/stock";
import { JWTUtils } from "./utils/jwt.util";
import { AuthRouter } from "./routers/auth";
import { UserRouter } from "./routers/user";
import { RolesRouter } from "./routers/roles";
import { ReportRouter } from "./routers/report";

(async () => {
  const app = express();
  const PORT = 3000;
  
  // await sequelize.sync({ alter: true })
  await sequelize.sync()
  
  app.use(express.json());
  app.use(cors());

  app.use(JWTUtils.authVerify)

  app.get('/api', (req,res) => {
    return res.status(200).send("found")
  })

  const orderRouter = new OrdersRouter("/order")
  // const customerRoute = new CustomerRouter("/customer")
  // const employeeRoute = new EmployeeRouter("/employee")
  const warehouseRouter = new WarehouseRouter("/warehouse")
  const productRouter = new ProductRouter("/product")
  const orderListingRouter = new OrderListingRouter("/orderListing")
  const stockRouter = new StockRouter("/stock")
  const authRouter = new AuthRouter("/auth")
  const userRouter = new UserRouter("/user")
  const rolesRouter = new RolesRouter("/roles")
  const reportRouter = new ReportRouter("/report")
  
  const routes = [orderRouter, warehouseRouter, productRouter, orderListingRouter, stockRouter, authRouter, userRouter, rolesRouter, reportRouter];
  routes.forEach((route) => {
    app.use(route.path, route.router);
  });

  app.use((req,res) => {
    return res.status(404).send("Endpoint not found")
  })

  app.use(function(err: Error | Boom, req: Request, res: Response, next: NextFunction) {
    if (isBoom(err)) {
      const errorPayload = err.output.payload
      return res.status(errorPayload.statusCode).send({
        status: errorPayload.statusCode,
        message: errorPayload.message,
        body: errorPayload
      })
    }
    return res.status(500).send({
      status: 500,
      message: 'Internal server error.',
      body: err
    });
  });
  
  app.listen(PORT, () => {
    console.log("started");
  });
})();