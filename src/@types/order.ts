import { Request } from "express";

export type OrderDaoCreate = {
  warehouseId: string;
  shippingAddress: string;
}

export interface IOrderCreateRequest extends Request {
  body: OrderDaoCreate;
}

export interface IOrder {
  id: string;
  warehouseId: string;
  shippingAddress: string;
}

