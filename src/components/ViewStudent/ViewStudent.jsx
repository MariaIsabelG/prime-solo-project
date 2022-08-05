import Nav from "../Nav/Nav";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StudentChart from '../StudentChart/StudentChart';



function ViewStudent(){
    
    const dispatch = useDispatch(); 
    const history = useHistory();
    const student = useSelector( (store) => store.edit);
    
    const handleEdit = () => {

        dispatch({
            type: 'SET_SELECTED_STUDENT',
            payload: student
        })

        history.push('/edit');
    }

    function handleHome(){
        history.push('/teacherhome');
    };
    
    return(
        <div>
            <Nav />
        
        <h3>{student.full_name}</h3>
        <div>
            <h4>Username:</h4><p> {student.username}</p>
            <h4>Considerations:</h4><p>{student.considerations}</p>
        </div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleHome}>Home</button>
        <StudentChart/>
        </div>
    )

};

export default ViewStudent;