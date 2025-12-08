type PersonX = {
    name: string;
    age: number;
  };
  
  type JobX = {
    position: string;
    department: string;
  };
  
  type EmployeeX = PersonX & JobX;
  
  function describeEmployee(employee: EmployeeX): string {
    if (employee.position === "Manager") {
      return `${employee.name} is a Manager in ${employee.department}`;
    } else if (employee.position === "Developer") {
      return `${employee.name} is a Developer in ${employee.department}`;
    } else {
      return `${employee.name} works as ${employee.position} in ${employee.department}`;
    }
  }
  
  const empX: EmployeeX = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "IT"
  };
  
  console.log(describeEmployee(empX));
  