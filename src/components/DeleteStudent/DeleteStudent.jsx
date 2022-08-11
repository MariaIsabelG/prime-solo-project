import { useDispatch }  from 'react-redux';
import { useHistory } from 'react-router-dom';

function DeleteStudent ({id}){

    const dispatch = useDispatch();
    const history = useHistory();

    function handleDelete() {
    
        // sending the specific id of a student
        dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })
        // view push to teacher home after deleting  a student
        history.push('/teacherhome');

    };

    function handleCancel(){

        // view push to teacher home for cancel button
        history.push('/teacherhome');
    };

    return (
        <div>
            <button className="teacher-red-btn" onClick={handleDelete}>Delete Student</button>
            <button className="teacher-green-btn" onClick={handleCancel}>Cancel</button>
        </div>
    )
};

export default DeleteStudent;