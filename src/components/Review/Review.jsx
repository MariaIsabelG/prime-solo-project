import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review (){

    const dispatch = useDispatch();
    const history = useHistory();
    const student = useSelector( store => store.user)

    const emotionInput = useSelector( (store) => store.emotionvalue);
    const sensationInput = useSelector( (store) => store.sensationvalue);
    const user = useSelector((store) => store.user);

    function handleSubmit(){

        dispatch({
            type: 'SUBMIT_INPUT',
            payload: {
                user_id: user.id, 
                emotion_id: emotionInput.emotion_id,
                sensation_id: sensationInput.sensation_id
            }
        })
        history.push('/thanks')
    };

    console.log( 'This emotion and sensation data passed:', emotionInput, sensationInput)
    return (
        <div>
        <h2>{student.full_name}, here are the answers you gave:</h2>
            <h3>Emotion: {emotionInput.emotion_name} </h3>
            <h3>Sensation: {sensationInput.sensation_name}</h3>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
};

export default Review;