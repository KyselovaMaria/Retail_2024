import { WarehouseDaoCreate } from "@/@types/warehouse";
import { Product } from "@/models/product";
import { Stock } from "@/models/stock";
import { Warehouse } from "@/models/warehouse";
import { Op } from "sequelize";

export class WarehouseDao {
  constructor() {}

  public static getAllWarehouses = async () => {
    const warehouses = await Warehouse.findAll({
      include: [
        {
          model: Stock,
          include: [Product]
        }
      ]
    });
    return warehouses
  };

  public static getWarehousesFromList = async (warehouseIds: string[]) => {
    const warehouses = await Warehouse.findAll({
      include: [Product],
      where: {
        id: {
          [Op.in]: warehouseIds
        }
      }
    });
    return warehouses
  };

  public static getWarehouseById = async (id: string) => {
    const warehouse = await Warehouse.findByPk(id, {
      include: [
        {
          model: Stock,
          include: [Product]
        }
      ]
    })
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