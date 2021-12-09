import React, {useState} from "react";
import '../component/Table.css'
import {FaTimes, FaUserEdit} from "react-icons/fa";

export const Table = ({students, setStudents, setStudent}) => {
    const handleDelete = (id) => {
        setStudents(students.filter(user => user.id !== id))
    }
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Job</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {students.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.job}</td>
                        <td>
                            <button className='deleteIcon' onClick={() => handleDelete(item.id)}> <FaTimes/></button>
                            <button className='updateIcon' onClick={() => {setStudent(item);}}><FaUserEdit/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}