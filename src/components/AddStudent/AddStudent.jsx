import { useHistory } from 'react-router-dom';

function AddStudent (){

    const history = useHistory();

    const registration = () => {
        {history.push('/registration')}
      }

    return (

        <div className="add-student">
            <h3>Add a student</h3>
            <button onClick={registration}>Add student</button>
        </div>
    )

};

export default AddStudent;