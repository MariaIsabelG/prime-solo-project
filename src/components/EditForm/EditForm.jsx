
function EditForm(props) {

    console.log('This is student info in the form:', props.student);
        return (

                <>
                  <h2>Edit Student</h2>
                  <p>We are editing this student: {props.student.full_name} with id: {props.student.id}</p>
                  <form onSubmit={handleSubmit}>
                    <input
                      onChange={(event) => handleChange(event)}
                      placeholder='GitHub username'
                      value={props.student.full_name}
                    />
                    <input type='submit' value='Update Student' />
                  </form>
                </>
              );
};

export default EditForm;