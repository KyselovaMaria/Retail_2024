// import { NextFunction, Request, Response } from "express";
// import { notFound } from "@hapi/boom";
// import { CustomerDao } from "@/dao/customer";
// import { ICustomerCreateRequest } from "@/@types/customer";

// export class CustomerController {
//   constructor() {}

//   public getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const customers = await CustomerDao.getAllCustomers()
//         return res.status(200).send(customers)
//     }
//     catch(e) {
//         next(e)
//     }
//   };

//   public getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params
//         const customer = await CustomerDao.getCustomerById(id)
//         if (!customer) throw notFound('No such order with that id')
//         return res.status(200).send(customer)
//     }
//     catch(e) {
//         next(e)
//     }
//   };

//   public createCustomer = async (req: ICustomerCreateRequest, res: Response, next: NextFunction) => {
//     try {
//         const createData = req.body
//         const customer = await CustomerDao.createCustomer(createData)
//         return res.status(200).send(customer)
//     }
//     catch(e) {
//         next(e)
//     }
//   };

//   public deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params
//         const customer = await CustomerDao.deleteCustomer(id)
//         if (!customer) throw notFound('No such order with that id')
//         return res.status(200).send(customer)
//     }
//     catch(e) {
//         next(e)
//     }
//   };

//   public updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params
//         const { data } = req.body
//         const customer = await CustomerDao.updateCustomer(id, data)
//         if (!customer) throw notFound('No such order with that id')
//         return res.status(200).send(customer)
//     }
//     catch(e) {
//         next(e)
//     }
//   };
// }