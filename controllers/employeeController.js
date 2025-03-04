let employees = [
    { id: 1, name: "John Doe", address: "New York", dept: "IT", manager: "Alice" },
    { id: 2, name: "Jane Smith", address: "San Francisco", dept: "HR", manager: "Bob" },
  ];
  
  exports.getEmployees = (req, res) => {
    res.json(employees);
  };
  
  exports.getEmployeeById = (req, res) => {
    const employee = employees.find(emp => emp.id == req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  };
  
  exports.addEmployee = (req, res) => {
    const newEmployee = { id: employees.length + 1, ...req.body };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
  };
  
  exports.updateEmployee = (req, res) => {
    const index = employees.findIndex(emp => emp.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Employee not found" });
    employees[index] = { ...employees[index], ...req.body };
    res.json(employees[index]);
  };
  
  exports.deleteEmployee = (req, res) => {
    employees = employees.filter(emp => emp.id != req.params.id);
    res.json({ message: "Employee deleted successfully" });
  };
  