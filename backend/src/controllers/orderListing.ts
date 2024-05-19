import { NextFunction, Request, Response } from "express";
import { notFound } from "@hapi/boom";
import { OrderListingDao } from "@/dao/orderListing";
import { IOrderListingCreateRequest } from "@/@types/orderListing";

export class OrderListingController {
  constructor() {}

  public createOrderListing = async (req: IOrderListingCreateRequest, res: Response, next: NextFunction) => {
    try {
        const createData = req.body
        const orderListing = await OrderListingDao.createOrderListing(createData)
        return res.status(200).send(orderListing)
    }
    catch(e) {
        next(e)
    }
  };

  public deleteOrderListing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const orderListing = await OrderListingDao.deleteOrderListing(id)
        if (!orderListing) throw notFound('No such order with that id')
        return res.status(200).send(orderListing)
    }
    catch(e) {
        next(e)
    }
  };

  public updateOrderListing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { data } = req.body
        const orderListing = await OrderListingDao.updateOrderListing(id, data)
        if (!orderListing) throw notFound('No such order with that id')
        return res.status(200).send(orderListing)
    }
    catch(e) {
        next(e)
    }
  };
}