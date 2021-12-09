import Form from "./form/Form";
import './App.css';
import {Table} from "./component/Table";
import {useState} from "react";
import 'animate.css';
import {FaTrash, FaUserEdit} from 'react-icons/fa';

const studentsList = [
    {id: 1, firstName: "Mohammad", lastName: "Majid", job: "developer"},
    {id: 2, firstName: "Ali", lastName: "Ahmadi", job: "photographer"},
    {id: 3, firstName: "Ashkan", lastName: "Davari", job: "actor"},
    {id: 4, firstName: "Hossein", lastName: "Afshari", job: "athlete"},
    {id: 5, firstName: "Nader", lastName: "Naderi", job: "driver"},
    {id: 6, firstName: "Alireza", lastName: "Amini", job: "designer"}
]

function App() {
    const [students, setStudents] = useState(studentsList)
    const [student, setStudent] = useState({firstName: "", lastName: "", job: ""})
    return (
        <div>
            <Table setStudent={setStudent} setStudents={setStudents} student={student} students={students}/>
            <Form setStudent={setStudent} setStudents={setStudents} student={student} students={students}/>
        </div>
    );
}

export default App;
