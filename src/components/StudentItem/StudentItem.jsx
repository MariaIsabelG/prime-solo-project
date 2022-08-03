import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentItem ({student}){

    const dispatch = useDispatch();
    const history = useHistory();



    const handleEdit = () => {

        dispatch({
            type: 'SET_EDIT_STUDENT',
            payload: student
        })
        history.push('/edit');
    }

    return (

        <tr key={student.id}>
            <td>{student.full_name}</td>
            <td>
                <button>View</button>
                <button onClick={handleEdit}>Edit</button>
            </td>
        </tr>
    )

};

export default StudentItem;