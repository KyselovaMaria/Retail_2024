import { NextFunction, Request, Response } from "express";
import { forbidden, notFound } from "@hapi/boom";
import { ProductDao } from "@/dao/product";
import { IProductCreateRequest } from "@/@types/product";

export class ProductController {
  constructor() {}

  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductDao.getAllProducts()
        return res.status(200).send(products)
    }
    catch(e) {
        next(e)
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const product = await ProductDao.getProductById(id)
        if (!product) throw notFound('No such order with that id')
        return res.status(200).send(product)
    }
    catch(e) {
        next(e)
    }
  };

  public createProduct = async (req: IProductCreateRequest, res: Response, next: NextFunction) => {
    try {
        const createData = req.body
        const product = await ProductDao.createProduct(createData)
        return res.status(200).send(product)
    }
    catch(e) {
        next(e)
    }
  };

  public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const product = await ProductDao.deleteProduct(id)
        if (!product) throw notFound('No such order with that id')
        return res.status(200).send(product)
    }
    catch(e) {
        next(e)
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { data } = req.body
        const product = await ProductDao.updateProduct(id, data)
        if (!product) throw notFound('No such order with that id')
        return res.status(200).send(product)
    }
    catch(e) {
        next(e)
    }
  };
}