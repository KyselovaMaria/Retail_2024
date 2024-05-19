import { NextFunction, Request, Response } from "express";
import { OrderDao } from "@/dao/order";
import { badRequest, notFound } from "@hapi/boom";
import { IOrderCreateRequest } from "@/@types/order";
import { WarehouseDao } from "@/dao/warehouse";
import { Stock } from "@/models/stock";
import { StockDao } from "@/dao/stock";

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

  public confirmOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const order = await OrderDao.getOrderById(id)
      if (!order) throw badRequest('There is no order with this id')
      if (order.confirmed) throw badRequest('Order already was confirmed')
      const warehouse = await WarehouseDao.getWarehouseById(order.warehouseId)
      const orderAmounts = order.orderListing.map(orderListing => {
        return {
          id: orderListing.productId,
          amount: orderListing.amount
        }
      })
      const warehouseAmounts = warehouse.stocks.map(stock => {
        return {
          id: stock.productId,
          amount: stock.amount,
          stockId: stock.id
        }
      })

      for (let orderAmount of orderAmounts) {
        const warehouseFoundStock = warehouseAmounts.find(item => orderAmount.id === item.id)
        if (!warehouseFoundStock) throw badRequest('There is no this product on this warehouse')
        if (orderAmount.amount > warehouseFoundStock.amount) throw badRequest('There is no stock to satisfy this order')
      }

      for (let orderAmount of orderAmounts) {
        const amount = orderAmount.amount
        const warehouseFoundStock = warehouseAmounts.find(item => orderAmount.id === item.id)
        const stockId = warehouseFoundStock.stockId
        await StockDao.removeAmountFromStock(stockId, amount) 
      }

      await OrderDao.confirmOrder(id)

      return res.status(200).send("success");
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
