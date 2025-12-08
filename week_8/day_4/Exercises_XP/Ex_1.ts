// Exercise 1
namespace Ex1 {
    export type Person = {
      name: string;
      age: number;
    };
  
    export type Address = {
      street: string;
      city: string;
    };
  
    export type PersonWithAddress = Person & Address;
  
    export const personWithAddress: PersonWithAddress = {
      name: "Alice",
      age: 30,
      street: "123 Main St",
      city: "New York"
    };
  
    console.log(personWithAddress);
  }
  
  // Exercise 6
  namespace Ex6 {
    export type Person = {
      name: string;
      age: number;
    };
  
    export type Job = {
      position: string;
      department: string;
    };
  
    export type Employee = Person & Job;
  
    export function describeEmployee(employee: Employee): string {
      if (employee.position === "Manager") {
        return `${employee.name} is a Manager in ${employee.department}`;
      } else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in ${employee.department}`;
      } else {
        return `${employee.name} works as ${employee.position} in ${employee.department}`;
      }
    }
  
    export const emp: Employee = {
      name: "Bob",
      age: 28,
      position: "Developer",
      department: "IT"
    };
  
    console.log(describeEmployee(emp));
  }
  