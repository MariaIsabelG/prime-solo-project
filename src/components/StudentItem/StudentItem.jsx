function StudentItem ({student}){

    return (

        <tr>
            <td>
                <p>{student.full_name}</p>
            </td>
            <td>
                <button>View</button>
            </td>
            <td>
                <button>Edit</button>
            </td>
        </tr>
    )

};

export default StudentItem;