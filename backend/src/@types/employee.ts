import { Request } from "express";

export type EmployeeDaoCreate = {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  employment: string;
  address: string;
  birthDate: Date;
  employmentDate: Date;
}

export interface IEmployeeCreateRequest extends Request {
  body: EmployeeDaoCreate;
}

export interface IEmployee {
    id: string;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    employment: string;
    address: string;
    birthDate: Date;
    employmentDate: Date;
  }
