import React, {useEffect, useState} from 'react';
import {listEmployees} from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }). catch(error => {
            console.error(error);
        })
    }, [])

    function addNewEmployees() {
        navigator('/add-employee')
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
                </tr>
                </thead>

                <tbody>

                {
                    employees.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                    )
                }

                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;

