import { Request } from "express";

export type OrderListingDaoCreate = {
  orderId: string;
  productId: string;
  amount: string;
}

export interface IOrderListingCreateRequest extends Request {
  body: OrderListingDaoCreate;
}

export interface IOrderListing {
  id: string;
  orderId: string;
  productId: string;
  amount: string;
}
