import { WarehouseDaoCreate } from "@/@types/warehouse";
import { Warehouse } from "@/models/warehouse";

export class WarehouseDao {
  constructor() {}

  public static getAllWarehouses = async () => {
    const warehouses = await Warehouse.findAll();
    return warehouses
  };

  public static getWarehouseById = async (id: string) => {
    const warehouse = await Warehouse.findByPk(id)
    return warehouse
  };

  public static createWarehouse = async (data: WarehouseDaoCreate) => {
    const warehouse = await Warehouse.create(data)
    return warehouse
  };

  public static deleteWarehouse = async (id: string) => {
    await Warehouse.destroy({
      where: {
        id
      }
    })
    return true
  };

  public static updateWarehouse = async (id: string, updateData: any) => {
    const updatedWarehouse = await Warehouse.update(updateData, {
      where: {
        id: id,
      },
      returning: true
    })
    return updatedWarehouse
  };
}