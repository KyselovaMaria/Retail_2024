import { ProductDaoCreate } from "@/@types/product";
import { Product } from "@/models/product";

export class ProductDao {
  constructor() {}

  public static getAllProducts = async () => {
    const orders = await Product.findAll();
    return orders
  };

  public static getProductById = async (id: string) => {
    const order = await Product.findByPk(id)
    return order
  };

  public static createProduct = async (data: ProductDaoCreate) => {
    const order = await Product.create(data)
    return order
  };

  public static deleteProduct = async (id: string) => {
    await Product.destroy({
      where: {
        id
      }
    })
    return true
  };

  public static updateProduct = async (id: string, updateData: any) => {
    const updatedOrder = await Product.update(updateData, {
      where: {
        id: id,
      },
      returning: true
    })
    return updatedOrder
  };
}