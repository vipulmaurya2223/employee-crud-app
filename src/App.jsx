import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleSave = () => {
        setSelectedEmployee(null);
    };

    return (
        <div className="container">
            <h1 className="text-center mt-4">Employee Management System</h1>
            <EmployeeForm selectedEmployee={selectedEmployee} onSave={handleSave} />
            <EmployeeList onEdit={handleEdit} />
        </div>
    );
}

export default App;

