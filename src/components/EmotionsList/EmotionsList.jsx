import { useDispatch, useSelector } from 'react-redux';
import EmotionsItem from '../EmotionsItem/EmotionsItem';
import { useEffect } from 'react';
import SensationsList from '../SensationsList/SensationsList';

function EmotionsList (){

    const dispatch = useDispatch();
    const emotions = useSelector( store => store.emotions);

    useEffect(() => { 
        dispatch({
            type: 'FETCH_EMOTIONS'
        })
    },[])

    return (
        <div className="teacher-state-container">
        <div >
            <h5>Emotions:</h5>
                {emotions.map((emotion) => {
                    return <EmotionsItem key={emotion.id} emotion={emotion} />
                })}
        </div>
        <SensationsList/>
        </div>
    )
};

export default EmotionsList;