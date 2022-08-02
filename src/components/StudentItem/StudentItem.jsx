

function StudentItem ({student}){

    return (

        <tr key={student.id}>
            <td>{student.full_name}</td>
            <td>
                <button>View</button>
                <button>Edit</button>
            </td>
        </tr>
    )

};

export default StudentItem;