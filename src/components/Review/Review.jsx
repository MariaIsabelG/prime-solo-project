import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review (){

    const history = useHistory();
    const student = useSelector( store => store.user)

    
    return (
        <div>
        <h2>{student.full_name}, here are the answers you gave:</h2>
            <h3>What you are feeling at this moment: </h3>
            <h3>Sensations you recognize at this moment: </h3>
            <button>Submit</button>
        </div>
    )
};

export default Review;