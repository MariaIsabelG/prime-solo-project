import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddStudent from '../AddStudent/AddStudent';
import StudentItem from '../StudentItem/StudentItem';


function StudentList (){

        const dispatch = useDispatch();
        const students = useSelector ((store) => store.students );

    useEffect(() => { 
        dispatch({
            type: 'FETCH_STUDENTS'
        })
        console.log(' This is the student list:', students)
    },[])

    return (

        <div className="student-list-container">
            <table>
                <thead>
                    <tr>
                        <th><h5 className="underlined-text">Your Students</h5></th>
                        <th><h5 className="underlined-text">Actions</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return <StudentItem key={student.id} student={student} />
                    })}
                </tbody>
            </table>
            <AddStudent/>
        </div>

    )
};

export default StudentList;