// import { CustomerDaoCreate } from "@/@types/customer";
// import { Customer } from "@/models/customer";

// export class CustomerDao {
//   constructor() {}

//   public static getAllCustomers = async () => {
//     const customers = await Customer.findAll();
//     return customers
//   };

//   public static getCustomerById = async (id: string) => {
//     const customer = await Customer.findByPk(id)
//     return customer
//   };

//   public static createCustomer = async (data: CustomerDaoCreate) => {
//     const customer = await Customer.create(data)
//     return customer
//   };

//   public static deleteCustomer = async (id: string) => {
//     await Customer.destroy({
//       where: {
//         id
//       }
//     })
//     return true
//   };

//   public static updateCustomer = async (id: string, updateData: any) => {
//     const updatedCustomer = await Customer.update(updateData, {
//       where: {
//         id: id,
//       },
//       returning: true
//     })
//     return updatedCustomer
//   };
// }