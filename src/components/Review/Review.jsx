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
        dispatch({type: 'CLEAR_EMOTION'});
        dispatch({type: 'CLEAR_SENSATION'});

        history.push('/thanks')
    };
    function handleBack() {

        history.push('/sensations')
    };

    console.log( 'This emotion and sensation data passed:', emotionInput, sensationInput)
    return (
        <div>
            <h1 className="student-text">Review</h1>
            <div className="student-review-container">
                <div>
                    <img className="student-review-bubbleposition" width="400" src={reviewGif} alt="review-gif"/>
                </div>
                <div>
                    <center><iframe src="https://giphy.com/embed/tZlrPHabl7C4kvMulU" width="150" height="150" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
                </div>
                    <h3>Emotion: {emotionInput.emotion_name} </h3>
                    <h3>Sensation: {sensationInput.sensation_name}</h3>
                <div>
                    <button className='back-btn' onClick={handleBack}>Back</button>
                    <button className="student-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default Review;