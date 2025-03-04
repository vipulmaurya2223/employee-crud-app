import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeList = ({ onEdit }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees(); // Refresh the list
    };

    return (
        <div className="container mt-4">
            <h2>Employee List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Manager</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.address}</td>
                            <td>{emp.dept}</td>
                            <td>{emp.manager}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => onEdit(emp)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
