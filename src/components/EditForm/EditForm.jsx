import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteStudent from '../DeleteStudent/DeleteStudent';
import Nav from '../Nav/Nav';

function EditForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const student = useSelector( (store) => store.edit);

    function handleChange(event, property) {

        // sends every change to any input in this component into a redux edit store
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: {property: property, value: event.target.value}
        })
    }

    function handleSubmit(event) {

        event.preventDefault();
        // send updated data to a saga 
        dispatch({ 
            type: 'EDIT_STUDENT',
            payload: student
    })
        // view push to teacher home after clicking update
        history.push('/teacherhome');
    };

        return (

                <>
                <Nav/>
                <div className='edit-student-container'>
                    <h5 className="underlined-text">Edit Student</h5>
                    {/* Form to handle the update of chosen student */}
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
                        {/* On click it updates student data in DB */}
                        <button className="teacher-blue-btn" type='submit' value='Update Student'>Update</button>
                    </form>
                    <DeleteStudent id={student.id} />
                    </div>
                </>
                );
};

export default EditForm;
