import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
                    <h2>Edit Student</h2>
                    <p>We are editing this student: {student.full_name} with id: {student.id}</p>
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
                        <input type='submit' value='Update Student' />
                    </form>
                    <DeleteStudent />
                    
                </>
                );
};

export default EditForm;
