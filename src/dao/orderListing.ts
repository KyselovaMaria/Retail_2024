import { OrderListingDaoCreate } from "@/@types/orderListing";
import { OrderListing } from "@/models/orderListing";

export class OrderListingDao {
  constructor() {}

  public static createOrderListing = async (data: OrderListingDaoCreate) => {
    const order = await OrderListing.create(data)
    return order
  };

  public static deleteOrderListing = async (id: string) => {
    await OrderListing.destroy({
      where: {
        id
      }
    })
    return true
  };

  public static updateOrderListing = async (id: string, updateData: any) => {
    const updatedOrder = await OrderListing.update(updateData, {
      where: {
        id: id,
      },
      returning: true
    })
    return updatedOrder
  };
}