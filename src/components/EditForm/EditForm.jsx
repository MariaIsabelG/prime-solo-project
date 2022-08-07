import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteStudent from '../DeleteStudent/DeleteStudent';
import Nav from '../Nav/Nav';

function EditForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const student = useSelector( (store) => store.edit);

    function handleChange(event, property) {

        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: {property: property, value: event.target.value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        dispatch({ 
            type: 'EDIT_STUDENT',
            payload: student
    })
        history.push('/teacherhome');
    };

        return (

                <>
                <Nav/>
                <div className='edit-student-container'>
                    <h5>Edit Student</h5>
                    <form onSubmit={handleSubmit}>
                        <label>Student Name:
                        <input
                        onChange={(event) => handleChange(event, 'full_name')}
                        placeholder='Student Full Name'
                        value={student.full_name}
                        /></label><br/>
                        <label>Student username:
                        <input
                        onChange={(event) => handleChange(event, 'username')}
                        placeholder='Student username'
                        value={student.username}
                        /></label><br/>
                        <label>Considerations:
                        <input
                        onChange={(event) => handleChange(event, 'considerations')}
                        placeholder='Considerations'
                        value={student.considerations}
                        /></label><br/>
                        <button className="teacher-blue-btn" type='submit' value='Update Student'>Update</button>
                    </form>
                    <DeleteStudent id={student.id} />
                    </div>
                </>
                );
};

export default EditForm;
