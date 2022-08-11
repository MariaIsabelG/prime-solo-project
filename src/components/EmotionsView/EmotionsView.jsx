import { useDispatch, useSelector } from 'react-redux';
import EmotionsViewItem from '../EmotionsViewItem/EmotionsViewItem';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import emotionGif from '../Images/emotions.gif';

function EmotionsView (){

    const dispatch = useDispatch();
    const history = useHistory();
    const emotions = useSelector( store => store.emotions);
    const chosenOne = useSelector( store => store.emotionvalue);

    useEffect(() => { 
        dispatch({
            type: 'FETCH_EMOTIONS'
        })
    },[])
    
    function handleNext () {

        // If statement that doesn't allow an empty response
        if(!chosenOne.emotion_name){
            alert('You must choose an emotion');
        }else{
        // view push to the sensations page
        history.push('/sensations')
        }
    };

    function handleBack() {
        // take the use back to breathing page
        history.push('/breathing')
    };

    return (
        
        <div>
            <h1 className="student-text">Emotions</h1>
            <div className="student-emotions-container">
            <div>
                {/* renders the bubble text */}
                <img className="student-emotions-bubbleposition" src={emotionGif} width="430" alt="emotion-gif"/>
            </div>
            <div>
                {/* renders the elephant gif */}
                <center><iframe src="https://giphy.com/embed/nryBR3KOpEP2EsPqn6" width="150" height="150" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
            </div>
            {/* informs the user the emotion button they clicked on */}
            <h5 className="student-text">Your emotion: {chosenOne.emotion_name}</h5>
            <div className="emotion-container" >
                {emotions.map((emotion) => {
                    return <EmotionsViewItem key={emotion.id} emotion={emotion} />
                })}
            </div> 
            <div>
                 {/*on click will take user back to breathing  */}
                <button className='back-btn' onClick={handleBack}>Back</button> 
                {/* on click will take user to sensations page */}
                <button className="student-btn" onClick={handleNext}>Next</button>
            </div> 
            </div>
        </div>
    )
};

export default EmotionsView;