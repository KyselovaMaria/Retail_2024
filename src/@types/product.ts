import { Request } from "express";

export type ProductDaoCreate = {
  name: string;
  price: number;
  minimumStock: number;
}

export interface IProductCreateRequest extends Request {
  body: ProductDaoCreate;
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    minimumStock: number;
  }
  