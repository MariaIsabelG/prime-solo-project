import { useSelector } from 'react-redux';

function EditForm() {

    const student = useSelector( (store) => store.edit);

    console.log('This is student in efit form:', student);

        return (

                <>
                    <h2>Edit Student</h2>
                    <p>We are editing this student: {} with id: {}</p>
                    {/* <form onSubmit={handleSubmit}>
                        <input
                        onChange={(event) => handleChange(event)}
                        placeholder='GitHub username'
                        // value={}
                        />
                        <input type='submit' value='Update Student' />
                    </form> */}
                </>
                );
};

export default EditForm;