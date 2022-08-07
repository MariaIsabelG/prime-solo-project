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
        <div className="view-student-container">
            <h5>Student Name:</h5><p>{student.full_name}</p>
            <h5>Username:</h5><p> {student.username}</p>
            <h5>Considerations:</h5><p>{student.considerations}</p>
       
        <button className="student-list-edit-btn" onClick={handleEdit}>Edit</button>
        <button className="student-list-home-btn" onClick={handleHome}>Home</button>
        </div>
        <div className="student-chart-container">
        <StudentChart/>
        </div>
        </div>
    )

};

export default ViewStudent;