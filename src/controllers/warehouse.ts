import { NextFunction, Request, Response } from "express";
import { notFound } from "@hapi/boom";
import { WarehouseDao } from "@/dao/warehouse";
import { IWarehouseCreateRequest } from "@/@types/warehouse";
import { StockDao } from "@/dao/stock";

export class WarehouseController {
  constructor() {}

  public getAllWarehouses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const warehouses = await WarehouseDao.getAllWarehouses()
        return res.status(200).send(warehouses)
    }
    catch(e) {
        next(e)
    }
  };

  public getWarehouseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const warehouse = await WarehouseDao.getWarehouseById(id)
        if (!warehouse) throw notFound('No such order with that id')
        return res.status(200).send(warehouse)
    }
    catch(e) {
        next(e)
    }
  };

  public getAllWarehousesWithProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id: productId } = req.params
        const stocks = await StockDao.getStockForProduct(productId)
        if (!stocks || !stocks.length) throw notFound('No stocks with that product')
        const warehouseIds = stocks.map(stock => stock.warehouseId)
        const warehouses = await WarehouseDao.getWarehousesFromList(warehouseIds)
        const warehousesInfo = warehouses.map(warehouse => {
          const foundProductInfo = warehouse.product.find(item => item.id === productId)
          return {
            id: warehouse.id,
            name: warehouse.name,
            address: warehouse.address,
            productInfo: foundProductInfo
          }
        })
        return res.status(200).send(warehousesInfo)
    }
    catch(e) {
        next(e)
    }
  };

  public createWarehouse = async (req: IWarehouseCreateRequest, res: Response, next: NextFunction) => {
    try {
        const createData = req.body
        const warehouse = await WarehouseDao.createWarehouse(createData)
        return res.status(200).send(warehouse)
    }
    catch(e) {
        next(e)
    }
  };

  public deleteWarehouse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const warehouse = await WarehouseDao.deleteWarehouse(id)
        if (!warehouse) throw notFound('No such order with that id')
        return res.status(200).send(warehouse)
    }
    catch(e) {
        next(e)
    }
  };

  public updateWarehouse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { data } = req.body
        const warehouse = await WarehouseDao.updateWarehouse(id, data)
        if (!warehouse) throw notFound('No such order with that id')
        return res.status(200).send(warehouse)
    }
    catch(e) {
        next(e)
    }
  };
}