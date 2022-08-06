import { useDispatch, useSelector } from 'react-redux';
import EmotionsViewItem from '../EmotionsViewItem/EmotionsViewItem';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function EmotionsView (){

    const dispatch = useDispatch();
    const history = useHistory();
    const emotions = useSelector( store => store.emotions);

    useEffect(() => { 
        dispatch({
            type: 'FETCH_EMOTIONS'
        })
    },[])
    
    function handleNext () {

        history.push('/sensations')
    }

    console.log('This is emotions:', emotions)
    return (
        <div>
            <h3>What emotion are you feeling at this moment?</h3>
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