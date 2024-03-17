import { NextFunction, Request, Response } from "express";
import { notFound } from "@hapi/boom";
import { EmployeeDao } from "@/dao/employee";
import { IEmployeeCreateRequest } from "@/@types/employee";

export class EmployeeController {
  constructor() {}

  public getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await EmployeeDao.getAllEmployees()
        return res.status(200).send(employees)
    }
    catch(e) {
        next(e)
    }
  };

  public getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const employee = await EmployeeDao.getEmployeeById(id)
        if (!employee) throw notFound('No such order with that id')
        return res.status(200).send(employee)
    }
    catch(e) {
        next(e)
    }
  };

  public createEmployee = async (req: IEmployeeCreateRequest, res: Response, next: NextFunction) => {
    try {
        const createData = req.body
        const employee = await EmployeeDao.createEmployee(createData)
        return res.status(200).send(employee)
    }
    catch(e) {
        next(e)
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const employee = await EmployeeDao.deleteEmployee(id)
        if (!employee) throw notFound('No such order with that id')
        return res.status(200).send(employee)
    }
    catch(e) {
        next(e)
    }
  };

  public updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { data } = req.body
        const employee = await EmployeeDao.updateEmployee(id, data)
        if (!employee) throw notFound('No such order with that id')
        return res.status(200).send(employee)
    }
    catch(e) {
        next(e)
    }
  };
}