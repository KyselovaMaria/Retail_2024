import { Request } from "express";

export type CustomerDaoCreate = {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  shippingAdress: string;
}

export interface ICustomerCreateRequest extends Request {
  body: CustomerDaoCreate;
}

export interface ICustomer {
  id: string
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  shippingAdress: string;
}
