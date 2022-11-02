import React, { useState } from "react";
import data from "./data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Groceries from "./Groceries";
import Appliances from "./Appliances";

const App = () => {
    const { employees } = data;
    const MySwal = withReactContent(Swal);

    return (
        <div className="content">

            <div className="row" style={{ margin: '20px' }}>
                <h3>1. Employees</h3>
                {employees.map(employee => {
                    return (
                        <div className="col-3" key={employee.id}>
                            <Card style={{ width: '18rem', marginLeft: '20px', marginTop: '20px' }}>
                                <Card.Img variant="top" src={employee.imageUrl} />
                                <Card.Body>
                                    <Card.Title onMouseEnter={() => {
                                        MySwal.fire({
                                            title:
                                                <div>
                                                    <h4>Full Details</h4>
                                                    <strong>Name: {employee.firstName} {employee.lastName}</strong>
                                                </div>,
                                            html:
                                                <div>
                                                    <label>Email: {employee.email}</label><br />
                                                    <label>Contact No: {employee.contactNumber}</label><br />
                                                    <label>Date of Birth: {employee.dob}</label><br />
                                                    <label>Age: {employee.age}</label><br />
                                                    <label>Address: {employee.address}</label><br />
                                                    <label>Salary: {employee.salary}</label><br />
                                                </div>,

                                        })
                                    }}
                                        onMouseLeave={() => {
                                            console.log("Event:MouseLeave");
                                        }}>{employee.firstName} {employee.lastName}</Card.Title>
                                    <Card.Text>
                                        <label>Email: {employee.email}</label>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div><br />
            <hr />
            <br />
            <Groceries />

            <hr />
            <br />
            <Appliances />


        </div>

    )
}

export default App;