import { OrderDaoCreate } from "@/@types/order";
import { Order } from "@/models/order";
import { OrderListing } from "@/models/orderListing";
import { Product } from "@/models/product";
import { Warehouse } from "@/models/warehouse";

export class OrderDao {
  constructor() {}

  public static getAllOrders = async () => {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderListing,
          include: [Product]
        },
        Warehouse
      ]
    });
    return orders
  };

  public static getOrderById = async (id: string) => {
    const order = await Order.findByPk(id, {
      include: [
        {
        model: OrderListing,
        include: [Product]
        },
        Warehouse
      ]
    })
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

  public static confirmOrder = async (id: string) => {
    await Order.update({confirmed: true}, {
      where: {
        id
      }
    })
  }

  public static getWarehouseOrders = async (warehouseId: string) => {
    const order = await Order.findAll({
      where: {
        warehouseId
      },
      include: [
        {
        model: OrderListing,
        include: [Product]
        }
      ]
    })
    return order
  };
}