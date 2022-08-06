import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import reviewGif from '../Images/review.gif';

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
        <h1 className="student-text">Review</h1>
        <img className="student-bubbleposition" width="400" src={reviewGif} alt="review-gif"/>
        <center><iframe src="https://giphy.com/embed/tZlrPHabl7C4kvMulU" width="150" height="150" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
        <div className="review-container">
            <h3>Emotion: {emotionInput.emotion_name} </h3>
            <h3>Sensation: {sensationInput.sensation_name}</h3>
            <button className="student-btn" onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    )
};

export default Review;