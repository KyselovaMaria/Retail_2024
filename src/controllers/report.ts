import { NextFunction, Request, Response } from "express";
import { badRequest, forbidden, notFound } from "@hapi/boom";
import { OrderDao } from "@/dao/order";
import { StockDao } from "@/dao/stock";
import { WarehouseDao } from "@/dao/warehouse";

export class ReportController {
  constructor() {}
  public getWarehouseReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id: warehouseId } = req.params

        const warehouse = WarehouseDao.getWarehouseById(warehouseId)
        if(!warehouse) throw badRequest('There is no warehouse with such id')
        
        const orders = await OrderDao.getWarehouseOrders(warehouseId);
        const stocks = await StockDao.getWarehouseStocks(warehouseId);
        const ordersData = orders.map(order => {
            return {
                id: order.id,
                confirmed: order.confirmed,
                shippingAddress: order.shippingAddress,
                orderListing: order.orderListing.map(orderListing => {
                    return {
                        productId: orderListing.productId,
                        amount: orderListing.amount,
                        productName: orderListing.product.name,
                        productPrice: orderListing.product.price
                    }
                })
            }
        })

        const stocksData = stocks.map(stock => {
            return {
                id: stock.id,
                productId: stock.productId,
                amount: stock.amount,
                productName: stock.product.name,
            }
        })
        const resultJson = {
            orders: ordersData,
            stocks: stocksData
        }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename=data.json');
        return res.status(200).send(resultJson)
    }
    catch(e) {
        next(e)
    }
  };
}