import { Request } from "express";

export type OrderDaoCreate = {
  customerId: string;
  warehouseId: string;
}

export interface IOrderCreateRequest extends Request {
  body: OrderDaoCreate;
}

export interface IOrder {
  id: string;
  customerId: string;
  warehouseId: string;
}

