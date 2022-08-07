import { useHistory } from 'react-router-dom';

function AddStudent (){

    const history = useHistory();

    const registration = () => {
        {history.push('/registration')}
      }

    return (

        <div >
            <h5 className="student-text">Add a student</h5>
            <button className="teacher-btn" onClick={registration}>Add student</button>
        </div>
    )

};

export default AddStudent;