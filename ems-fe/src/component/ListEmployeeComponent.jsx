import React, {useEffect, useState} from 'react';
import {deleteEmployee, listEmployees} from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    function addNewEmployees() {
        navigator('/add-employee')
    }

    /* 수정 후 path*/
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    /* 삭제 후 path */
    function removeEmployee(id) {
        deleteEmployee(id)
            .then((response) => {
                console.log("삭제 : " + id);
                getAllEmployees();
            }).catch(error=> {
                console.error(error);

        })
    }


    return (
        <div className="container">
            <br />
            <h2 className='text-center'>직원 목록</h2>
            <button type="button" className="btn btn-outline-primary"
            onClick={addNewEmployees}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr style={{textAlign:"center"}}>
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
                    <tr style={{textAlign:'center'}} key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-outline-dark' onClick={() => updateEmployee(employee.id)} type="button">Update</button> &nbsp;&nbsp;
                            <button className='btn btn-outline-danger' onClick={() => removeEmployee(employee.id)} type="button">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;

