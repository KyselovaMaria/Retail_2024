import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import sequelize from "@/config/sequelize.js";
import { OrdersRouter } from "@/routers/order";
import { Boom, isBoom } from "@hapi/boom";

(async () => {
  const app = express();
  const PORT = 3000;
  
  await sequelize.sync({ force: true })
  
  app.use(express.json());
  app.use(cors());

  app.get('/api', (req,res) => {
    return res.status(200).send("found")
  })

  const orderRouter = new OrdersRouter("/orders")
  
  const routes = [orderRouter];
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