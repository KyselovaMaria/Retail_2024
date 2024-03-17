import { NextFunction, Request, Response } from "express";
import { OrderDao } from "@/dao/order";
import { notFound } from "@hapi/boom";
import { IOrderCreateRequest } from "@/@types/order";

export class OrderController {
  constructor() {}

  public getAllOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const orders = await OrderDao.getAllOrders();
      return res.status(200).send(orders);
    } catch (e) {
      next(e);
    }
  };

  public getOrderById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const order = await OrderDao.getOrderById(id);
      if (!order) throw notFound("No such order with that id");
      return res.status(200).send(order);
    } catch (e) {
      next(e);
    }
  };

  public createOrder = async (
    req: IOrderCreateRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const createData = req.body;
      const order = await OrderDao.createOrder(createData);
      return res.status(200).send(order);
    } catch (e) {
      next(e);
    }
  };

  public deleteOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const order = await OrderDao.deleteOrder(id);
      if (!order) throw notFound("No such order with that id");
      return res.status(200).send(order);
    } catch (e) {
      next(e);
    }
  };

  public updateOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const { data } = req.body;
      const order = await OrderDao.updateOrder(id, {});
      if (!order) throw notFound("No such order with that id");
      return res.status(200).send(order);
    } catch (e) {
      next(e);
    }
  };
}
