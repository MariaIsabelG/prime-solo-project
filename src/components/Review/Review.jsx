import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review (){

    const history = useHistory();
    const student = useSelector( store => store.user)


    return (
        <div>
        <h2>{student.full_name}, here are the answers you gave:</h2>
            <h3>Emotion: </h3>
            <h3>Sensation: </h3>
            <button>Submit</button>
        </div>
    )
};

export default Review;