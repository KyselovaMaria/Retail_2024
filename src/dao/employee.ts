import { EmployeeDaoCreate } from "@/@types/employee";
import { Employee } from "@/models/employee";

export class EmployeeDao {
  constructor() {}

  public static getAllEmployees = async () => {
    const employees = await Employee.findAll();
    return employees
  };

  public static getEmployeeById = async (id: string) => {
    const employee = await Employee.findByPk(id)
    return employee
  };

  public static createEmployee = async (data: EmployeeDaoCreate) => {
    const employee = await Employee.create(data)
    return employee
  };

  public static deleteEmployee = async (id: string) => {
    await Employee.destroy({
      where: {
        id
      }
    })
    return true
  };

  public static updateEmployee = async (id: string, updateData: any) => {
    const updatedEmployee = await Employee.update(updateData, {
      where: {
        id: id,
      },
      returning: true
    })
    return updatedEmployee
  };
}