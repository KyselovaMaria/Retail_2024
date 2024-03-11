import { Order } from "@/models/order";

export class OrderDao {
  constructor() {}

  public static getAllOrders = async () => {
    const orders = await Order.findAll();
    return orders
  };

  public static getOrderById = async (id: string) => {
    const order = await Order.findByPk(id)
    return order
  };
}