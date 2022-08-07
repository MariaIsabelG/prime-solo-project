import { useDispatch }  from 'react-redux';
import { useHistory } from 'react-router-dom';


function DeleteStudent ({id}){

    const dispatch = useDispatch();
    const history = useHistory();

    function handleDelete() {

        dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })
        history.push('/teacherhome');

    };

    function handleCancel(){
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