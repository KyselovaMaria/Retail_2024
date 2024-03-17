import { Request } from "express";

export type OrderListingDaoCreate = {
  orderId: string;
  productId: string;
  amount: string;
}

export interface IOrderCreateRequest extends Request {
  body: OrderListingDaoCreate;
}

export interface IOrderListing {
  id: string;
  orderId: string;
  productId: string;
  amount: string;
}
