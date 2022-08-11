import { useHistory } from 'react-router-dom';

function AddStudent (){

    const history = useHistory();

    // view push to registration page
    const registration = () => {
        {history.push('/registration')}
    }

    return (

        <div >
            <button className="teacher-yellow-btn" onClick={registration}>Add student</button>
        </div>
    )

};

export default AddStudent;