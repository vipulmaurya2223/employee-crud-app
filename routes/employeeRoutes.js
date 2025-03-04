const express = require("express");
const router = express.Router();

// Sample Employee Data
let employees = [
  { id: 1, name: "John Doe", address: "New York", dept: "IT", manager: "Alice" },
  { id: 2, name: "Jane Smith", address: "California", dept: "HR", manager: "Bob" },
];

// GET all employees
router.get("/", (req, res) => {
  res.json(employees);
});

// POST - Add Employee
router.post("/", (req, res) => {
  const newEmployee = req.body;
  newEmployee.id = employees.length + 1;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// PUT - Update Employee
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedEmployee = req.body;
  employees = employees.map(emp => (emp.id == id ? { ...emp, ...updatedEmployee } : emp));
  res.json({ message: "Employee updated", employees });
});

// DELETE - Remove Employee
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter(emp => emp.id != id);
  res.json({ message: "Employee deleted", employees });
});

module.exports = router;
