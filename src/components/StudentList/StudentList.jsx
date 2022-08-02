import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

        <div className="grey-div">
            <table>
                <thead>
                    <tr>
                        <th>Your Students</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return <StudentItem key={student.id} student={student} />
                    })}
                </tbody>
            </table>
        </div>

    )
};

export default StudentList;