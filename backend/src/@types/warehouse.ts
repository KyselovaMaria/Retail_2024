import { Request } from "express";

export type WarehouseDaoCreate = {
  name: string;
  address: string;
}

export interface IWarehouseCreateRequest extends Request {
  body: WarehouseDaoCreate;
}

export interface IWarehouse {
  id: string;
  name: string;
  address: string;
}
