import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addEmployee, updateEmployee } from "../services/employeeService";

const EmployeeForm = ({ selectedEmployee, onSave }) => {
    const [initialValues, setInitialValues] = useState({
        name: "",
        address: "",
        dept: "",
        manager: "",
    });

    useEffect(() => {
        if (selectedEmployee) setInitialValues(selectedEmployee);
    }, [selectedEmployee]);

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        address: Yup.string().required("Address is required"),
        dept: Yup.string().required("Department is required"),
        manager: Yup.string().required("Manager is required"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        if (selectedEmployee) {
            await updateEmployee(selectedEmployee.id, values);
        } else {
            await addEmployee(values);
        }
        resetForm();
        onSave();
    };

    return (
        <div className="container mt-4">
            <h2>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
                <Form>
                    <div className="mb-3">
                        <label>Name</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <Field type="text" name="address" className="form-control" />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Department</label>
                        <Field type="text" name="dept" className="form-control" />
                        <ErrorMessage name="dept" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label>Manager</label>
                        <Field type="text" name="manager" className="form-control" />
                        <ErrorMessage name="manager" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {selectedEmployee ? "Update" : "Add"}
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default EmployeeForm;
