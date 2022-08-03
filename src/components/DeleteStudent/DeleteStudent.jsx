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
            <button onClick={handleDelete}>Delete Student</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )

};

export default DeleteStudent;