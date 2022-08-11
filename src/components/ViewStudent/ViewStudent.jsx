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
        <div className="individual-student-container">   
        <div className="view-student-container">
            <h5 className="underlined-text">Student Name:</h5><p className="student-text">{student.full_name}</p>
            <h5 className="underlined-text">Username:</h5><p className="student-text"> {student.username}</p>
            <h5 className="underlined-text">Considerations:</h5><p className="student-text">{student.considerations}</p>
        <div className="student-text">
        <button className="teacher-blue-btn" onClick={handleEdit}>Edit</button>
        <button className="teacher-green-btn" onClick={handleHome}>Home</button>
        </div>
        </div>
        <div className="student-chart-container">
        <StudentChart/>
        </div>
        </div> 
        </div>

    )

};

export default ViewStudent;