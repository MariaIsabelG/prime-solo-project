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

        if(!chosenOne.emotion_name){
            alert('You must choose an emotion');
        }else{
        
        history.push('/sensations')
        }
    }

    console.log('This is emotions:', chosenOne)
    return (
        <div>
            <h1 className="student-text">Emotions</h1>
            <img className="student-bubbleposition" src={emotionGif} width="610" alt="emotion-gif"/>

            <center><iframe src="https://giphy.com/embed/nryBR3KOpEP2EsPqn6" width="230" height="230" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
            <h3 className="student-text">Your emotion: {chosenOne.emotion_name}</h3>
            <div className="emotion-container">
                {emotions.map((emotion) => {
                    return <EmotionsViewItem key={emotion.id} emotion={emotion} />
                })}
            </div> 
            <div>   
                <button className="student-btn" onClick={handleNext}>Next</button>
            </div> 
        </div>
    )

};

export default EmotionsView;