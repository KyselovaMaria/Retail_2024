import { Request } from "express";

export type StockDaoCreate = {
  productId: string;
  warehouseId: string;
  amount: string;
}

export interface IStockCreateRequest extends Request {
  body: StockDaoCreate;
}

export interface IStock {
    id: string;
    productId: string;
    warehouseId: string;
    amount: string;
  }
  