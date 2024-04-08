import { NextFunction, Request, Response } from "express";
import { badRequest, notFound } from "@hapi/boom";
import { StockDao } from "@/dao/stock";
import { IStockCreateRequest } from "@/@types/stock";

export class StockController {
  constructor() {}

  public createStock = async (req: IStockCreateRequest, res: Response, next: NextFunction) => {
    try {
        const createData = req.body
        const stock = await StockDao.createStock(createData)
        return res.status(200).send(stock)
    }
    catch(e) {
        next(e)
    }
  };

  public deleteStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const stock = await StockDao.deleteStock(id)
        if (!stock) throw notFound('No such order with that id')
        return res.status(200).send(stock)
    }
    catch(e) {
        next(e)
    }
  };

  public updateStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { data } = req.body
        const stock = await StockDao.updateStock(id, data)
        if (!stock) throw notFound('No such order with that id')
        return res.status(200).send(stock)
    }
    catch(e) {
        next(e)
    }
  };

  public addToStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, amount } = req.body
        const stock = await StockDao.addAmountToStock(id, amount)
        if (!stock) throw notFound('No such order with that id')
        return res.status(200).send(stock)
    }
    catch(e) {
        next(e)
    }
  };

  public transferStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { stockFromId, stockToId, amount } = req.body
        const stock = await StockDao.transferStock(stockFromId, stockToId, amount)
        if (!stock) throw badRequest('These stocks are refferenced to a different products or you are trying to transfer more, than you have')
        return res.status(200).send(stock)
    }
    catch(e) {
        next(e)
    }
  };
}