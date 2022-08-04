import { useDispatch, useSelector } from 'react-redux';
import EmotionsViewItem from '../EmotionsViewItem/EmotionsViewItem';
import { useEffect, useState } from 'react';
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

    return (
        <div>
            <h3>What emotion are you feeling at this moment?</h3>
                {emotions.map((emotion) => {
                    return <EmotionsViewItem key={emotion.id} emotion={emotion} />
                })}
            <div>   
                <button onClick={handleNext}>Next</button>
            </div> 
        </div>
    )

};

export default EmotionsView;