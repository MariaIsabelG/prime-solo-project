import { useSelector } from 'react-redux';

function EditForm() {

    const student = useSelector( (store) => store.edit);

    function handleChange(event, property) {

        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: {property: property, value: event.target.value}
        })
    }

    function handleSubmit

        return (

                <>
                    <h2>Edit Student</h2>
                    <p>We are editing this student: {student.full_name} with id: {student.id}</p>
                    <form >
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
                        /></label>
                        <input type='submit' value='Update Student' />
                    </form>
                </>
                );
};

export default EditForm;

// onSubmit={handleSubmit}