import React, {useState} from "react";
import '../form/Form.css'
import {FaTimes, FaUserEdit, FaUserPlus} from "react-icons/fa";


const makeUniqueId = () => {
    return Math.floor(Math.random() * 1000)
}

const Form = ({students, setStudents, student, setStudent}) => {
    const [visible, setVisible] = React.useState(false)
    const handleAdd = (e) => {
        e.preventDefault()
        const {firstName, lastName, job} = student
        setStudents([...students, {id: makeUniqueId(), firstName, lastName, job}])
        setStudent({firstName: "", lastName: "", job: ""})
        if (student.id) {
            setStudents(students.map(oldStudent => student.id === oldStudent.id ? student : oldStudent))
        } else {
            setStudents([...students, {id: makeUniqueId(), ...student}])
        }
        setStudent({firstName: "", lastName: "", job: ""})
    }
    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <button className="open-button" onClick={() => setVisible(true)}><FaUserPlus/> Add New User</button>
            {visible &&
            <div className="form-popup" id="myForm">

                <form className="form-container" onSubmit={handleAdd}>
                    <button className="close-button" onClick={() => setVisible(false)}><FaTimes/></button>
                    <h1>ADD NEW USER</h1>
                    <div>

                        <label htmlFor="firstName">First Name</label>
                        <input onChange={handleChange} id={"firstName"} type="text" name={"firstName"}
                               value={student.firstName}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={handleChange} id={"lastName"} type="text" name={"lastName"}
                               value={student.lastName}/>
                    </div>
                    <div>
                        <label htmlFor="job">Job</label>
                        <input onChange={handleChange} id={"job"} type="text" name={"job"} value={student.job}/>
                    </div>
                    <input id='submitQueryBtn' type="submit"/>

                </form>
            </div>}
        </div>

    )
}


export default Form


//
// < >
// <div className='sidenav'>
// <button id='closeMenu' onClick={handleCloseMenu}><FaTimes/></button>
// <button onClick={handleOpenMenu}><FaUserPlus/> Add New User</button>
//
// <form onSubmit={handleAdd}>
//
// <h1>Add New User</h1>
//
// </form>
// <span> open</span>
//
//
// </>