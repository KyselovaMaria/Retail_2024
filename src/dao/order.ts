import { OrderDaoCreate } from "@/@types/order";
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

  public static createOrder = async (data: OrderDaoCreate) => {
    const order = await Order.create(data)
    return order
  };

  public static deleteOrder = async (id: string) => {
    await Order.destroy({
      where: {
        id
      }
    })
    return true
  };

  public static updateOrder = async (id: string, updateData: any) => {
    const updatedOrder = await Order.update(updateData, {
      where: {
        id: id,
      },
      returning: true
    })
    return updatedOrder
  };
}