import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentItem ({student}){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleEdit = () => {

        dispatch({
            type: 'SET_SELECTED_STUDENT',
            payload: student
        })
        history.push('/edit');
        console.log( 'This is student in studentitem:', student );
    }

    const handleView = () => {
        
        dispatch({
            type: 'SET_SELECTED_STUDENT',
            payload: student
        })
        history.push('/viewstudent');
    }


    return (

        <tr key={student.id}>
            <td>{student.full_name}</td>
            <td>
                <button className="teacher-orange-btn" onClick={handleView}>View</button>
                <button className="teacher-blue-btn" onClick={handleEdit}>Edit</button>
            </td>
        </tr>
    )

};

export default StudentItem;