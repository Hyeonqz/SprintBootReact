import React, {useEffect, useState} from 'react';
import {listEmployees} from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees()
            .then((response) => {
            setEmployees(response.data);
        })
            .catch(error => {
            console.error(error);
        })
    }, [])

    function addNewEmployees() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }


    return (
        <div className="container">
            <br />
            <h2 className='text-center'>List of Employees</h2>
            <button type="button" className="btn btn-outline-primary"
            onClick={addNewEmployees}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>

                {
                    employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-outline-dark' onClick={() => updateEmployee(employee.id)} type="button">Update</button> &nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;

