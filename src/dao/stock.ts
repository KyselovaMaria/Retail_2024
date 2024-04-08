import { StockDaoCreate } from "@/@types/stock";
import sequelize from "@/config/sequelize";
import { Stock } from "@/models/stock";

export class StockDao {
  constructor() {}

  public static createStock = async (data: StockDaoCreate) => {
    const order = await Stock.create(data);
    return order;
  };

  public static deleteStock = async (id: string) => {
    await Stock.destroy({
      where: {
        id,
      },
    });
    return true;
  };

  public static updateStock = async (id: string, updateData: any) => {
    const updatedOrder = await Stock.update(updateData, {
      where: {
        id: id,
      },
      returning: true,
    });
    return updatedOrder;
  };

  public static addAmountToStock = async (id: string, amount: number) => {
    const stockExisting = await Stock.findByPk(id);
    if (!stockExisting) return null;
    const newStock = await Stock.increment("amount", {
      by: amount,
      where: { id },
    });
    return newStock.flat()[0];
  };

  public static getStockForProduct = async (productId: string) => {
    const stocks = await Stock.findAll({
      where: {
        productId,
      },
    });
    return stocks;
  };

  public static transferStock = async (stockFromId: string, stockToId: string, amount: number) => {
    const stockFrom = await Stock.findByPk(stockFromId)
    if (stockFrom.amount < amount) return null
    const stockTo = await Stock.findByPk(stockToId)
    if (stockFrom.productId !== stockTo.productId) return null
    console.log(stockFrom, 'stockFrom')
    console.log(stockTo, 'stockTo')

    const t = await sequelize.transaction()
    
    try {
      await Stock.decrement("amount", {
        by: amount,
        where: { id: stockFromId },
        transaction: t
      });
  
      await Stock.increment("amount", {
        by: amount,
        where: { id: stockToId },
        transaction: t
      });

      await t.commit()
  
      return true
    } catch (err) {
      await t.rollback()
      throw err
    }
  }
}
