import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentItem from '../StudentItem/StudentItem';


function StudentList (){

        const dispatch = useDispatch();
        const students = useSelector ( store => store.userReducer);


    useEffect(() => { 
        dispatch({
            type: 'FETCH_STUDENTS'
        })
        
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
                    {students.map((student) =>{
                        return (
                            <StudentItem key={student.id} student={student}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    )
};

export default StudentList;